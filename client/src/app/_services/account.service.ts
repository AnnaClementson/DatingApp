import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Injectable means this service can be injected into other componants or services in our application
@Injectable({
  providedIn: 'root'
})
//Used to make requests to our api 
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
//inject the http client into the account service
  constructor(private http: HttpClient) { }
//structure of the login service that pass our information to the server
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
