import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {

  constructor(private http: HttpClient) { }

  getlist(): Observable<any>{

    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
//http://79.143.85.121/epet24/public/api/getproducts