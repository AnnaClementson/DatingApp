import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
//Injectable means this service can be injected into other componants or services in our application
@Injectable({
  providedIn: 'root'
})
//Used to make requests to our api 
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
//observarable replay subject, it will store the values for anytime anyone subscribes it will omit the amount of values we specify 
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
//inject the http client into the account service
  constructor(private http: HttpClient) { }
//structure of the login service that pass our information to the server
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      //get the response and get the user from it, if user is correct then this is going to populate the user in local storage
      map((response: User) => {
        const user = response;
        //check if we have a user
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          //set this to the current user from the observable replay subject from the api
          this.currentUserSource.next(user);
        }
      })
    )
  }

  //using helper method to pass in user and set current source to user
  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  //logout method
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
