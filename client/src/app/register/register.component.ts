import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //for outputs you have to give it an event emitter
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private AccountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.AccountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  //cancel will emit the value we want to the method (false)
  cancel() {
    this.cancelRegister.emit(false);
  }

}
