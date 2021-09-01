import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Passenger } from '../Passenger';

@Component({
  selector: 'app-add-passengers',
  templateUrl: './add-passengers.component.html',
  styleUrls: ['./add-passengers.component.css']
})
export class AddPassengersComponent implements OnInit {

  passenger:Passenger = {firstName!:"", lastName!:"", age!:0,
  flight:{flightId:"",departureDate!:new Date(),returnDate!:new Date(),toCity:"",fromCity:"",noOfSeats:0,economyClassFare:0,businessClassFare:0}
}
  submitted = false;
  flightId: any;
  addForm!: FormGroup;
  displayMessage!: string;
  
    
    constructor(private userService : UserService, private router: Router,private formBuilder:FormBuilder) {
      
      this.flightId = localStorage.getItem("formFlightId");
    console.log("Flight Id is :" + localStorage.getItem("formFlightId"));
    }
  
    ngOnInit(){
     

      this.addForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],

      });
    }
reset(){ 
  this.addForm.reset();

}


      onSubmit()
      {
        this.passenger.flight.flightId=this.flightId;
        this.passenger.firstName=this.addForm.controls['firstName'].value;
        this.passenger.lastName=this.addForm.controls['lastName'].value;
        this.passenger.age=this.addForm.controls['age'].value;
        this.displayMessage= "Passenger(s) added, add more or continue.";
        this.submitted=true;
        // this.save();
        this.userService.createPassenger(this.passenger)
        .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
        
        
      }
      
    

    }
  

    
 
  
  // save()
  // {
  //   this.passengerService.createPassenger(this.passenger).subscribe(
  //     (data:any)=> console.log(data),
  //     (error:any)=>console.log(error));
  //     this.passenger=new Passenger();
  //   }
    
 
  
