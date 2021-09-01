import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  userName : any;
  totalFare:any;
  flightId:any
  bookingDate:any

  constructor() {
    this.userName = localStorage.getItem("userName");
    this.totalFare= localStorage.getItem("totalFare");
    this.flightId= localStorage.getItem("formFlightId");
    this.bookingDate= localStorage.getItem("formBookingDate");
    console.log(localStorage.getItem("totalFare"));
    console.log(localStorage.getItem("userName"));
   }

  ngOnInit(): void {
   
  }
  printPage() {
    window.print();
  }

}
