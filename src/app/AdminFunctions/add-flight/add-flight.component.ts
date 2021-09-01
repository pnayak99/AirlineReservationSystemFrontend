import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Flights } from 'src/app/flights/flights';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight: Flights = new Flights();
  submitted = false;
  router: any;
  constructor(private adminService: AdminService) { }

   goBack()
  {
     this.router.navigate(['./adminLogin']);
   }


  ngOnInit() {
  }
  newEmployee(): void {
    this.submitted = false;
    this.flight = new Flights();
  }
 save() {
   
   this.adminService.addFlight(this.flight)
     .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
     this.flight = new Flights();
    
  }
  onSubmit() {
    this.submitted = true;
      this.save();
  }
 

}