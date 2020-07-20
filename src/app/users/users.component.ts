import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(
    private database: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.database.collection('@Users').get().subscribe(
      subs => subs.forEach(
        user => this.users.push(user.data())
      )
    )
  }

}
