import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-bus-management',
  templateUrl: './bus-management.component.html',
  styleUrls: ['./bus-management.component.css']
})
export class BusManagementComponent implements OnInit {

  busses: any = [];

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {

    this.db.collection('@Buses').get().subscribe(
      sub => sub.forEach(bus => this.busses.push(bus.data()))
    );

  }

}
