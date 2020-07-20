import { Component, OnInit } from '@angular/core';
import { LoginService } from '../-service/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout()
      .then(() => location.pathname = '/login')
      .catch(e => alert(e.message))
  }

  get loggedInStatus() {
    return this.loginService.isLoggedIn;
  }

}
