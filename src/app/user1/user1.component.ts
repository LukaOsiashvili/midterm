import { Component } from '@angular/core';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {

  constructor(public service:DisplayService){}

  
  usersFromChildUserInterface : ChildUser [] = [

    {
      id: "1",
      FirstName: "Steph",
      LastName: "Curry",
      DateOfBirth: "1980 / 12 / 20",
      PhoneNumber: "1234567101",
      Email: "Steph@gmail.com"
    },

    {
      id: "2",
      FirstName: "Kevin",
      LastName: "Durant",
      DateOfBirth: "1985 / 1 / 12",
      PhoneNumber: "1234567102",
      Email: "Kevin@gmail.com"
    },

    {
      id: "3",
      FirstName: "Lebron",
      LastName: "James",
      DateOfBirth: "1989 / 4 / 15",
      PhoneNumber: "1234567103",
      Email: "Lebron@gmail.com"
    },
  ]

  passArray(){
    this.service.setArray(this.usersFromChildUserInterface)
  }

}
