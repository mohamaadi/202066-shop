import { Component, OnInit } from '@angular/core';
import { ShopserviceService } from '../shopservice.service';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.css']
})
export class ShopLayoutComponent implements OnInit {

  public shoplist: any;
  public shoplistcatigories : any[] =[] ;


  constructor(private shopservice : ShopserviceService) { }

  ngOnInit(): void {

    this.getshoplist();

  }

  getshoplist(){

    this.shopservice.getlist().subscribe(list => {
      this.shoplistcatigories =list ;
      console.log(list);
    });
  }

}
