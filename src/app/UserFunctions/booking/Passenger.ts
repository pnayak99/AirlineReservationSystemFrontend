import { Flights } from "src/app/flights/flights";

export class Passenger
{
    
    firstName:String='';
    lastName:String='';
    age:number=0;
    
    flight:Flights;


    constructor(firstName:string,lastName:string,age:number,flight:Flights,) {


        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        
        this.flight=flight;
    }
   
 
    


}