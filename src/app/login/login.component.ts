import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from '../-service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = null; 
  message: string = 'n/a'; 

  constructor(
    private auth: AngularFireAuth,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if ( this.loginService.isLoggedIn ) this.router.navigateByUrl('/');
  }


  login(email, pass, event) {
    event.preventDefault();

    this.auth.auth.signInWithEmailAndPassword(email, pass)
      .catch(err => {
        setTimeout(() => this.clear(), 6000);
        this.errorMessage = err.message; 
      });
  }

  logout() {
    this.loginService.logout()
      .catch(e => alert(e.message))
  }

  clear() {
    this.errorMessage = null;
    this.message = 'n/a';
  }

}
