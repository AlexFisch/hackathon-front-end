// data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private responseDataSubject = new BehaviorSubject<any>(null);


  constructor() { }

  setResponseData(data: any) {
    this.responseDataSubject.next(data);
  }

  getResponseData() {
    return this.responseDataSubject.asObservable();
  }
}
