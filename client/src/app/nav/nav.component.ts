import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  //Selector to add this componant to another componant 
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //initalising user input to type any
  model: any = {}
  loggedIn: boolean;
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    //You need to subscribe to login observable
    this.accountService.login(this.model).subscribe(response => 
      {
        console.log(response)
        this.loggedIn = true;
      }, error => {
        console.log(error);
      })
  }

}
