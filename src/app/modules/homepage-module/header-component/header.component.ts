import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SignOutService } from "../../../services/sign-out.service";
import { LogService } from "../../../services/log.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SignOutService, LogService]
})

export class HeaderComponent  {
  response: {};
  constructor(private router: Router,
              private signoutService: SignOutService,
              private logService: LogService) {}

  onLogout() {
    this.signoutService.signOut().subscribe(
      res=> {
        this.response = res;
        localStorage.removeItem('token');
        this.router.navigate(['../auth']);
      },
      error => {
        this.logService.add('Logout: ' + error);
      }
    )
  }
}
