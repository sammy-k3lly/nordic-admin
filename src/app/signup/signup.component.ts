import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from '../-service/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string = null;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private ls: LoginService
  ) { }

  ngOnInit(): void {
    if ( this.ls.isLoggedIn ) this.router.navigateByUrl('/');
  }

  signUp(email, pass, pass2, e) {
    e.preventDefault();

    if ( pass === pass2 ) 
      this.auth.auth.createUserWithEmailAndPassword(email, pass)
        .then(() => this.login(email, pass))
        .catch(e => {
          this.errorMessage = e.message;
          setTimeout(() => this.clear(), 6000);
        })
    else {
      this.errorMessage = 'The passwords do not match';
      setTimeout(() => this.clear(), 6000);
    }
  }

  login(e, p) {
    this.auth.auth.signInWithEmailAndPassword(e, p)
      .catch(e => {
        this.errorMessage = 'The passwords do not match';
        setTimeout(() => this.clear(), 6000);
      });
  }

  clear() {
    this.errorMessage = null;
  }
}
