import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http: HttpClient) { }


  getList(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}



