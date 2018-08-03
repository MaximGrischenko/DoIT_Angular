import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: []
})

export class HomepageComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(){
    this.router.navigate(['app/map']);
  }
}
