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
      //const token = localStorage.setItem('access_token', res.token);
      console.log(res);

    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  // signIn(user: User) {
  //   return this.http.post<any>(`${this.endpoint}/signin`, user)
  //     .subscribe((res: any) => {
  //       localStorage.setItem('access_token', res.token)
  //       this.getUserProfile(res._id).subscribe((res) => {
  //         this.currentUser = res;
  //         this.router.navigate(['user-profile/' + res.msg._id]);
  //       })
  //     })
  // }





  signup(usersignup:any){
    console.log(JSON.stringify(usersignup));

    this.http.post('https://tavana-node.herokuapp.com/auth/Signup', JSON.stringify(usersignup), options)
    .subscribe(res => {
      console.log(res);

    });
  }

}
const options = {headers: {'Content-Type': 'application/json'}};
