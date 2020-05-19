import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm : FormGroup;
  // form = new FormGroup({});

  // model: any = {};
  // options: FormlyFormOptions = {};
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'Input',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Input',
  //       placeholder: 'Placeholder',
  //       description: 'Description',
  //       required: true,
  //     },
  //   },
  // ];





  
  constructor(  
    private fb : FormBuilder,
    private accountService : AccountserviceService 
     ) {}

     ngOnInit(): void {
      this.signupForm = this.fb.group({
        userName : this.fb.control('', Validators.required),
        password : this.fb.control('',Validators.required)
  
      });
      
  }
  
  
  
  
  onsignupSubmit() {
    console.log(this.signupForm.value);
    this.accountService.signup(this.signupForm.value);
  }

}
