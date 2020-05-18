import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicewithparamService {

  constructor(private http: HttpClient) { }
  
  getparam(): Observable<any>{

    var data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(data), options);

  //  return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
