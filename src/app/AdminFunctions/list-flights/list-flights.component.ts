import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Flights } from 'src/app/flights/flights';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

  flightsList: Flights[]=[];
  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData()
    {
      this.adminservice.getFlightDetails().subscribe(
        data=>
        {
          this.flightsList=data;
        }
      );
    }
  }