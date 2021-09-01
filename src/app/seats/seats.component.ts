import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent {

  total=1;
  base_cost=2000
   seatCount=0; 
   current=0;
   current_cost=0;
  old=[0,0,0,0,0,0];
   new=[0,0,0,0,0,0];
 
   goForward=true;
   constructor(private _router:Router) { }
 
   ngOnInit(): void {     
   
   }
 changeEco(n:number){

  console.log(this.new);    
    this.new[n]=n;    
    this.current_cost+=(this.base_cost*2);    
    console.log(this.current_cost);   
    this.seatCount+=(this.seatCount+1);
    console.log(this.new);    
 }
 changeBusiness(n:number){

  console.log(this.new);    
    this.new[n]=n;    
    this.current_cost+=(this.base_cost*4);    
    console.log(this.current_cost);   
    this.seatCount+=(this.seatCount+1);
    console.log(this.new);    
 }

 pay(){  
  
  localStorage.setItem("totalSeats",this.seatCount.toString());
  localStorage.setItem("totalFare",this.current_cost.toString());
  console.log(this.seatCount);
  this._router.navigate(['paymentDetails'])
 //console.log("empy.", localStorage.getItem('fourth')==null); 
 
 }
}






