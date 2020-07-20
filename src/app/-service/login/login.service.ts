import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authState: User = null;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    afAuth.authState.subscribe(auth => this.authState = auth);
  }

  get isLoggedIn(): boolean {
    return this.authState !== null;
  }

  get loggedInUser(): string {
    return this.authState ? this.authState.displayName : null
  }

  get currentUser(): string  {
    return this.authState.email;
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}