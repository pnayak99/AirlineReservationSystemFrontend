import { Users } from "src/app/users/users";

export class Bookings{
    // bookingId!: String; 
    bookingDate: Date;  
      
    flightId:string='';
    

    user: Users;

    constructor(bookingDate=new Date(),flightId:string,user:Users,) {
        this.bookingDate=bookingDate;
        this.flightId=flightId;
        
        this.user=user;
    }


}