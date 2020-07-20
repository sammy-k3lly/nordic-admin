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


  addBus(busName, busType, driverName, travelRoute: string, tripType, numberOfSeats, price, e) {
    e.preventDefault();

    this.db.collection('@Buses').add({
      Movement: tripType,
      Number_Of_Seats: numberOfSeats,
      Price: price + ' Cedis',
      Status: null,
      Time: new Date().toUTCString(),
      Type: busType,
      carFrom: travelRoute.split('-')[0].trim(),
      carNumber: busName,
      carTo: travelRoute.split('-')[1].trim(),
      seat: numberOfSeats 
    })
  }

}
