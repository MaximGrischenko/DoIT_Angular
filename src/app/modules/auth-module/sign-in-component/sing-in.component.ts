import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SignInService } from "../../../services/sign-in.service";
import { LogService } from "../../../services/log.service";

import { SigninModel } from "../../../models/SigninClass";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService, LogService]
})

export class SingInComponent {

  userData = new SigninModel('','');
  response: {};
  error: any;

  constructor(private router: Router,
              private siginService: SignInService,
              private logService: LogService) {}

  onSubmit() {
    this.siginService.signIn(this.userData).subscribe(
      data => {
        this.response = data;
        this.error = null;
      },
      error => {
        this.error = error;
        this.logService.add('Send login data: ' + error);
      },
      () => {
        if(this.response['auth']) {
          localStorage.setItem('token', this.response['token']);
          this.router.navigate(['app']);
        }
      }
    );
  }
}
