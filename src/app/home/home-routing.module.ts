import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';



const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  },
  {
    path: 'home',
    component: HomeLayoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
