import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ParentUser } from './parent-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: any [] = [

    {
      firstName: "John",
      lastName: "Smith",
      age: "20",
    },

    {
      firstName: "Peter",
      lastName: "Smith",
      age: "28",
    },

    {
      firstName: "Steve",
      lastName: "Johnson",
      age: "30",
    },

    {
      firstName: "Nick",
      lastName:  "Johnson",
      age: "10",
    },
    
    {
      firstName: "Liza",
      lastName: "Johnson",
      age: "15",
    },
]

  usersFromInterface: ParentUser [] = [

    {
      id: "1",
      FirstName: "Peter",
      LastName: "Peterson",
      DateOfBirth: "2001 / 2 / 5",
      PhoneNumber: "1234567890",
      Email: "Peter@gmail.com"
    },

    {
      id: "2",
      FirstName: "John",
      LastName: "Johnson",
      DateOfBirth: "1995 / 5 / 7",
      PhoneNumber: "1234567891",
      Email: "John@gmail.com"
    },

    {
      id: "3",
      FirstName: "Steve",
      LastName: "Stevenson",
      DateOfBirth: "1980 / 12 / 4",
      PhoneNumber: "1234567892",
      Email: "Steve@gmail.com"
    },

  ];

}
// Has Unexpected Error

  // usersReactiveForm!= FormGroup;

  // get id(){
  //   return this.usersReactiveForm.get('id');
  //  }

  // get firstname(){
  //   return this.usersReactiveForm.get('firstname');
  // }

  // get lastname(){
  //   return this.usersReactiveForm.get('lastname');
  // }
  
  // get dateOfBirth(){
  //   return this.usersReactiveForm.get('dateOfBirth');
  // }

  // get phoneNumber(){
  //   return this.usersReactiveForm.get('phoneNumber');
  // }

  // get email(){
  //   return this.usersReactiveForm.get('email');
  // }

  
  // constructor(private fb: FormBuilder){}

  // ngOnInit(): void{
  //   this.usersReactiveForm = this.fb.group({
  //     id: ['', [Validators.required]],
  //     firstname: ['', [Validators.required, Validators.minLength(3)]],
  //     lastname: ['', [Validators.required, Validators.minLength(3)]],
  //     dateOfBirth: ['', [Validators.required]],
  //     phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
  //     email: ['', [Validators.required, Validators.minLength(8)]]
  //   })
  // }