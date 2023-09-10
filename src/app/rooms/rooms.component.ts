import { Component } from '@angular/core';
import { Room, Roomlist } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hiderooms=false;
  rooms : Room={
    totalrooms:20,
    availableroom:10,
    bookedroom:5
  };
  roomlist :Roomlist[]=[{
    roomno:1,
    rootype:'deluxroom',
    amenities:'air condition,shower',
    price:500,
    photo:'https://creativeyatra.com/wp-content/uploads/2018/12/Doubletree-Hilton-SG-Highway-Ahmedabad.jpg',
    checkintime:new Date('01-Jan-2023'),
    checkouttime:new Date('02-Jan-2023'),
    Signature:'ABCD'
    
  },{
    roomno:2,
    rootype:'single room',
    amenities:'non-ac',
    price:1000,
    photo:'https://creativeyatra.com/wp-content/uploads/2018/12/Untitled-1.jpg',
    checkintime:new Date('01-Feb-2023'),
    checkouttime:new Date('01-Feb-2023'),
    Signature:'ABCD123'
  },{
    roomno:3,
    rootype:'Private suite',
    amenities:'AC',
    price:5000,
    photo:'https://creativeyatra.com/wp-content/uploads/2018/12/Rooms-Doubletree-Hilton.jpg',
    checkintime:new Date('01-Feb-2022'),
    checkouttime:new Date('05-Feb-2022'),
    Signature:'xyz'
  },{
    roomno:4,
    rootype:'SUit',
    amenities:'AC,shower,hotwater',
    price:25222,
    photo:'https://www.discoverlosangeles.com/sites/default/files/media/activities/the-private-suite-at-lax2.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp',
    checkintime:new Date('01-Mar-2022'),
    checkouttime:new Date('05-Mar-2022'),
    Signature:'BAAOOA'
  }

]

    Toggle()
    {
      this.hiderooms=!this.hiderooms;
    }
   
}
