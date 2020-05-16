import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  public category: any;
  public categories: any[] = [];

  constructor(private productservise : ProductserviceService) { }

  title = "learning_project";


  ngOnInit(): void {

    //this.getCategory();

    this.getCategoriesFromService();

  }

  getCategoriesFromService() {
    this.productservise.getList()
      .subscribe(list => {
        this.categories = list;
        console.log(list);

      });
  }

  // getCategory() {
  //   this.productservise.getCategory()
  //   .subscribe( res => {
  //     setTimeout( () => {
  //       this.category = res;
  //       console.log(res);
  //       console.log(JSON.stringify(res));
  //     }, 4000);
  //   });
  // console.log(this.category);

  // }


}



