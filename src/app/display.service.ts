import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  serviceUsersArray: any;

  setArray(object: any){
    
    this.serviceUsersArray = object;
    console.log(this.serviceUsersArray);
    console.log("Array Is Displayed By Service")

  }

}
