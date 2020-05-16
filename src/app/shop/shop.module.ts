import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopserviceService } from './shopservice.service';


@NgModule({
  declarations: [ShopLayoutComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule
  ],
  providers:[ShopserviceService]
})
export class ShopModule { }
