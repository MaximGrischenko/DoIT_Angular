import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.css']
})

export class AuthPopupComponent {
  @Input() error: any;
}
