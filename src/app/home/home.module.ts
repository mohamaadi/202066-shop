import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from '../account/account.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './productservice.service';


@NgModule({
  imports: [
    CommonModule,
     AccountModule,
     HttpClientModule,
    HomeRoutingModule
  ],
  declarations: [HomeLayoutComponent, HeaderComponent, FooterComponent],
  providers: [ProductserviceService]
})
export class HomeModule { }
