import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {

  constructor(private http: HttpClient) { }

  getlist(): Observable<any>{

    // var data = {
    //   title: 'foo',
    //   boط/ط/dy: 'bar',
    //   userId: 2
    // };

    var data : any;
    

   data = {
      "userName": "nasi2",
      "password": "nasi123"
    }

           
    const options = {headers: {'Content-Type': 'application/json'}};

    //let reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //return this.http.post("https://tavana-node.herokuapp.com/auth/signup",JSON.stringify(data),{headers:reqHeaders});
// let x  = JSON.parse(data);
// console.log(x);

    return this.http.post("https://tavana-node.herokuapp.com/auth/login",data, options);    
    //return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
//http://79.143.85.121/epet24/public/api/getproducts

