import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { SignupModel } from "../models/SignupClass";

@Injectable()
export class SignUpService {
  private signUpApiEndPoint = 'https://doit-service.herokuapp.com/api/register';

  constructor(private http: HttpClient) {}

  signUp(user: SignupModel) {
    const requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {name: user.name, email:user.email, password: user.password};
    return this.http.post(this.signUpApiEndPoint, body, {
      headers: requestHeaders
    });
  }
}
