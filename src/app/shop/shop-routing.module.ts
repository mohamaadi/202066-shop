import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';
import { ServicewithparamcompComponent } from './servicewithparamcomp/servicewithparamcomp.component';
import { ShopserviceService } from './shopservice.service';


const routes: Routes = [
  {
    path: '',
    component: ShopLayoutComponent
  },
  {
    path: 'param',
    component: ServicewithparamcompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
