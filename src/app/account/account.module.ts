import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccountLayoutComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule 
  ]
})
export class AccountModule { }
