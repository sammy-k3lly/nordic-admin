import { Component, OnInit } from '@angular/core';
import { LoginService } from '../-service/login/login.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

  }

  get loggedInStatus() {
    return this.loginService.isLoggedIn;
  }

  get email() {
    return this.loginService.currentUser;
  }

}
