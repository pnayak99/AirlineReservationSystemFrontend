import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Flights } from '../flights/flights';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

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

  


