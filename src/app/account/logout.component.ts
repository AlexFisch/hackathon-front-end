import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
//import { DataService } from '../_services/data.service';

import { AccountService, AlertService } from '../_services';
import {User} from "../_models";

@Component({ templateUrl: 'logout.component.html' })
export class LogoutComponent implements OnInit {


    constructor(

        private accountService: AccountService,

    ) {


    }



    ngOnInit() {
       this.accountService.logout()
    }


}
