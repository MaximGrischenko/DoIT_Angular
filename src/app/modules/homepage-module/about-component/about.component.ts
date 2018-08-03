import { Component, OnInit } from "@angular/core";
import { AboutService } from "../../../services/about.service";
import { LogService } from "../../../services/log.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService, LogService]
})

export class AboutComponent implements OnInit {
  userInfo: any;
  constructor (private aboutService: AboutService, private logService: LogService) {}
  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.aboutService.getAbout(token).subscribe(
        data => {
          this.userInfo = data;
        },
        error => {
          this.logService.add('Get user data: ' + error);
        }
      )
    }
  }
}
