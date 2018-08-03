import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AboutService {
  private aboutApiEndPoint = 'https://doit-service.herokuapp.com/api/about';
  constructor(private http: HttpClient) {}

  getAbout(token) {
    const requestHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.get(this.aboutApiEndPoint, {
      headers: requestHeaders
    });
  }
}
