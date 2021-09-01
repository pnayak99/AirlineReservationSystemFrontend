import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from 'src/app/flights/flights';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search-flight-by-city',
  templateUrl: './search-flight-by-city.component.html',
  styleUrls: ['./search-flight-by-city.component.css']
})
export class SearchFlightByCityComponent implements OnInit {
  
  flightsList: Flights[]=[];

  toCity:String='';
  fromCity:String='';
  
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    
  }
onSearch(){
  {
    this.UserService.searchFlightByCity(this.toCity,this.fromCity).subscribe(
      data=>{
        console.log(data);
        this.flightsList = data;}

    
    )
  }



}


}
