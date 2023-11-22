import { Component, Input } from '@angular/core';
import { ChildUser } from '../child-user';
import { ParentUser } from '../parent-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  @Input() userArray: ParentUser [] = [];



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

}
