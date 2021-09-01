import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Bookings } from './Bookings';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  addForm!: FormGroup;

  booking:Bookings={bookingDate!: new Date, flightId!:"",
  user:{userId:"",firstName :"", lastName:"",dob:new Date(),phoneNumber:"",emailId:"", password:""}};
  userName : any;
  
  submitted = false;
 
  constructor(private userService: UserService,private formBuilder:FormBuilder,private router:Router) {
    this.userName = localStorage.getItem("userName");
    console.log("userName :" + localStorage.getItem("userName"));
    


   }
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      bookingDate: ['', Validators.required],
      flightId: ['', Validators.required],

    });

   
   
  }
  
 
  //  newBooking(): void {
  //    this.submitted = false;
  //     this.booking.bookingId=this.
  // }
//  save() {

 
   
//    this.userService.createBooking(this.booking)
//      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
//       //  this.booking = new Booking();
    
//   }
  onSubmit() {
    
    this.booking.flightId=this.addForm.controls['flightId'].value;
    this.booking.bookingDate=this.addForm.controls['bookingDate'].value;
  
    this.booking.user.userId=this.userName;
   
   this.submitted = true;
   if (this.addForm.invalid) {
    return;
  }
  this.userService.createBooking(this.booking)
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));

  localStorage.setItem('formFlightId',(this.addForm.value.flightId));
  localStorage.setItem('formBookingDate', (this.addForm.value.bookingDate));
 
   this.router.navigate(['/addPassengers'])
//      this.save();
 }


}