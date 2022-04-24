import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id:string,
  name:string,
  email:string,
  password:string,
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private url = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  login(body){
    console.log(body);
    let auth_response = this.http.post(this.url + 'api/auth/login', {'email': body.email, 'password': body.password});


    return auth_response;
  }


  register(body){
    console.log(body);
    let auth_response = this.http.post(this.url + 'api/auth/register', {
      'email': body.email, 
      'name': body.name,
      'password': body.password,
      'password_confirmation': body.password_confirmation,
    });


    return auth_response;
  }

  logout(body){
    console.log(body);
    let auth_response = this.http.post(this.url + 'api/auth/logout', {
      'email': body.email, 
    });


    return auth_response;
  }

}
