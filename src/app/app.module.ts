import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { UsersComponent } from './users/users.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportsComponent } from './reports/reports.component';
import { TravelComponent } from './travel/travel.component';
import { SettingsComponent } from './settings/settings.component';
import { BusManagementComponent } from './bus-management/bus-management.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from './-guard/login/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'travel',
    component: TravelComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'bus-management',
    component: BusManagementComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  }

]

@NgModule({
  declarations: [
    UsersComponent,
    SettingsComponent,
    TravelComponent,
    ReportsComponent,
    UsersComponent,
    PaymentComponent,
    AppComponent,
    TitleComponent,
    SidebarComponent,
    DashboardComponent,
    BusManagementComponent,
    LoginComponent,
    SignupComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
