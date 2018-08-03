import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { SigninModel } from "../models/SigninClass";

@Injectable()
export class SignInService {
  private signInApiEndPoint = 'https://doit-service.herokuapp.com/api/login';

  constructor(private http: HttpClient) {}

  signIn(user: SigninModel) {
    const requestHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {email: user.email, password: user.password};
    return this.http.post(this.signInApiEndPoint, body, {
      headers: requestHeaders
    });
  }
}
