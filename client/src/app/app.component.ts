import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

//bring in app conponants 
constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }
  //persist login, looking at browser local storage for the key of user 
  setCurrentUser() {//because it was stringified you use JSON.parse to get item out of then get item out of local storage
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
}
