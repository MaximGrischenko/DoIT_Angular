import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SignOutService {
  private signOutApiEndPoint = 'https://doit-service.herokuapp.com/api/logout';

  constructor(private http: HttpClient) {}

  signOut() {
    return this.http.get(this.signOutApiEndPoint);
  }
}
