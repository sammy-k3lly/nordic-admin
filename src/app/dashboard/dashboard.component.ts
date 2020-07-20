import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private database: AngularFirestore
  ) { }

  subs = [];
  buses = 0;
  users = 0;
  rentBuses = 0;

  ngOnInit(): void {
    this.subs.push(
      this.database.collection('@Buses').get().subscribe(
        subs => this.buses = subs.size
      )
    )

    this.subs.push(
      this.database.collection('@Users').get().subscribe(
        subs => this.users = subs.size
      )
    )

    this.subs.push(
      this.database.collection('@Rent').get().subscribe(
        subs => this.rentBuses = subs.size
      )
    )
    
  }


  ngOnDestroy() {
    this.subs.forEach(
      subs => subs.unsubscribe()
    )
  }

}
