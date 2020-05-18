import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
//import { AccountserviceService } from '../accountservice.service';
//import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(  
    private fb : FormBuilder,
    private accountService : AccountserviceService 
     ) {}
    
 
  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName : this.fb.control('', Validators.required),
      password : this.fb.control('',Validators.required)

    });
    
}




onLoginSubmit() {
  console.log(this.loginForm.value);
  this.accountService.login(this.loginForm.value);
}




}
