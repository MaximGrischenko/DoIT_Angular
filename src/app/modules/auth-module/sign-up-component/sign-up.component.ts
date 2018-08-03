import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SignUpService } from "../../../services/sign-up.service";
import { LogService } from "../../../services/log.service";

import { SignupModel } from "../../../models/SignupClass";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService, LogService]
})

export class SignUpComponent  {
  userData = new SignupModel('','', '');
  response: {};
  error: any;

  constructor(private router: Router,
              private sigupService: SignUpService,
              private logService: LogService) {}

  onSubmit() {
    this.sigupService.signUp(this.userData).subscribe(
      data => {
        this.response = data;
        this.error = null;
      },
      error => {
        this.error = error;
        this.logService.add('Send register data: ' + error);
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
