import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from './admin.service';
import { AddFlightComponent } from './AdminFunctions/add-flight/add-flight.component';
import { AdminDashboardComponent } from './AdminFunctions/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './AdminFunctions/admin-login/admin-login.component';
import { ListFlightsComponent } from './AdminFunctions/list-flights/list-flights.component';
import { AdminsComponent } from './admins/admins.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SeatsComponent } from './seats/seats.component';
import { TicketComponent } from './ticket/ticket.component';
import { AddPassengersComponent } from './UserFunctions/booking/add-passengers/add-passengers.component';
import { BookingComponent } from './UserFunctions/booking/booking.component';
import { LoginLandingComponent } from './UserFunctions/login-landing/login-landing.component';
import { PaymentDetailsComponent } from './UserFunctions/payment-details/payment-details.component';

import { SearchFlightByCityComponent } from './UserFunctions/search-flight-by-city/search-flight-by-city.component';
import { UserLoginComponent } from './UserFunctions/user-login/user-login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'flightsList',component:ListFlightsComponent},
  {path:'createUser',component:UsersComponent},
  {path:'selectSeats',component:SeatsComponent},
  {path:'searchFlights',component:SearchFlightByCityComponent},
  {path:'adminLogin', component:AdminLoginComponent},
  {path:'addPassengers', component:AddPassengersComponent},
  {path:'loginLanding/booking',component:BookingComponent},
  {path:'loginUser',component:UserLoginComponent},
  {path:'addFlights',component:AddFlightComponent},
  {path:'generateTicket',component:TicketComponent},
  {path:'paymentDetails',component:PaymentDetailsComponent},
  {path:'adminDashboard',component:AdminDashboardComponent,
   children: [
    {
      path:'addFlights', component:AddFlightComponent
    },
   {
    path:'flightsList',component:ListFlightsComponent
   }] },
  
 
  {path:'loginLanding',component:LoginLandingComponent,
   children: [
    {
      path:'booking', component:BookingComponent
    },
  {
    path:'searchFlights',component:SearchFlightByCityComponent
  }] },

  {path:'**',component:HomePageComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
