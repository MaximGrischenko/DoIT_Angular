import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthService {
  public static isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
