import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ShopLayoutComponent
  },
  {
    path: 'cart',
    //component: ShopLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
