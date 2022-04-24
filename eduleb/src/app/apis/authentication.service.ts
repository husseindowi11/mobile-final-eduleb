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

  login(email:string, password:string){
    let body = {'email': email, 'password': password};
    let auth_response = this.http.post(this.url + 'api/auth/login', JSON.stringify(body));

    if(!auth_response['is_authenticated']){
      return false;
    }

    return auth_response;
  }

}
