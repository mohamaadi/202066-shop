import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http : HttpClient) { }

  login(user:any){
    console.log(JSON.stringify(user));

    this.http.post('https://tavana-node.herokuapp.com/auth/login', JSON.stringify(user), options)
    .subscribe(res => {
      console.log(res);

    });
  }
}
const options = {headers: {'Content-Type': 'application/json'}};