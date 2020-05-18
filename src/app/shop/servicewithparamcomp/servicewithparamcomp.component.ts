import { Component, OnInit } from '@angular/core';
import { ServicewithparamService } from '../servicewithparam.service';

@Component({
  selector: 'app-servicewithparamcomp',
  templateUrl: './servicewithparamcomp.component.html',
  styleUrls: ['./servicewithparamcomp.component.css']
})
export class ServicewithparamcompComponent implements OnInit {

  public param_: any;
 // public shoplistcatigories : any[] =[] ;

  constructor(private servicewithparam_ : ServicewithparamService) { }

  ngOnInit(): void {
    this.getserviceparam();
  }

  getserviceparam(){

    this.servicewithparam_.getparam().subscribe(list =>{
      this.param_ = list;
      console.log(list);
    });

  }
}
