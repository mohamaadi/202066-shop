import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormlyModule } from '@ngx-formly/core';
//import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AccountRoutingModule } from './account-routing.module';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AccountserviceService } from './accountservice.service';



@NgModule({
  declarations: [AccountLayoutComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    AccountserviceService
  ]
})
export class AccountModule { }
