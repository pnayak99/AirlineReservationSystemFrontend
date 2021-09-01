import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-landing',
  templateUrl: './login-landing.component.html',
  styleUrls: ['./login-landing.component.css']
})
export class LoginLandingComponent implements OnInit {
  userName : any;

  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName");
  }

}
