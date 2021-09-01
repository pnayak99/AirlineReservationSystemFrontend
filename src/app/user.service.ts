import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flights } from './flights/flights';
import { Users } from './users/users';
import { Passenger } from './UserFunctions/booking/Passenger';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8095/api/v1"
  constructor(private http:HttpClient) { }

  createUser(Users: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}`+'/addnewuser', Users))
    return this.http.post(`${this.baseUrl}`+'/addnewuser', Users);
   }


   public searchFlightByCity(toCity:String, fromCity:String)
   {
     console.log( this.http.get(`${this.baseUrl}`+"/searchflights/"+ toCity +"/"+ fromCity))
     return this.http.get<any>(`${this.baseUrl}`+"/searchflights/"+ toCity +"/"+ fromCity);
   }
 
   createBooking(Bookings: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}`+'/userbooking', Bookings))
    return this.http.post(`${this.baseUrl}`+'/userbooking', Bookings);
   }

   loginUser(Users:Object):Observable<any>{

    console.log(this.http.post(`${this.baseUrl}`+'/userlogin', Users));
        return this.http.post(`${this.baseUrl}`+'/userlogin', Users);
   }
  
   createPassenger(Passenger: Object): Observable<Object>
   {
     console.log(this.http.post(`${this.baseUrl}` + '/addnewpassenger' , Passenger))
     return this.http.post(`${this.baseUrl}` +'/addnewpassenger',Passenger);
   }
 
   public PassengerList(passenger : Object):Observable<any>{
     console.log(this.http.post(`${this.baseUrl}` +'/passengerList',Passenger))
     return this.http.post(`${this.baseUrl}` +'/passengerList',Passenger);
   }
 }

