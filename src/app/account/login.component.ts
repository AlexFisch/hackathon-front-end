import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DataService } from '../_services/data.service';

import { AccountService, AlertService } from '../_services';
import {User} from "../_models";

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

    responseData: any;
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private dataService: DataService
    ) {
      console.log('in the constructor')
    }



    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
      this.dataService.responseData$.subscribe(data => {
        this.responseData = data;
       });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        console.log('in login ', this.f['email'])
      //You can access this stored data in any component by subscribing to the responseData$ observable provided by the service.
      this.dataService.setResponseData(this.accountService.login(this.f['email'].value, this.f['password'].value))

        this.accountService.login(this.f['email'].value, this.f['password'].value)
            .pipe(first())
            .subscribe({
                next: () => {
                  console.log('routing to chat ui')
                    // get return url from query parameters or default to home page

                    //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl('http://localhost:4200/account/chatBot');
                  window.location.href = 'http://localhost:4200/account/chatBot';
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
