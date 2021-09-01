import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admins } from './admins/admins';
import { Flights } from './flights/flights';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl="http://localhost:8095/api/v1"
  constructor(private http:HttpClient) { }

  getFlightDetails()
  {
    return this.http.get<any[]>(this.baseUrl+"/showAllFlights");
  }


  addFlight(flight: Flights): Observable<Object> {
    
    return this.http.post(`${this.baseUrl}`+'/addnewflight', flight);
      }

  

  loginAdmin(admin:Admins):Observable<any>{

    console.log(this.http.post(`${this.baseUrl}`+'/adminlogin', admin));
        return this.http.post(`${this.baseUrl}`+'/adminlogin',admin);
    
      }
  
 
     
       


}    

  

