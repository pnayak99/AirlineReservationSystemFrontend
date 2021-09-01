import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsComponent } from './admins/admins.component';
import { FlightsComponent } from './flights/flights.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule,NgForm } from '@angular/forms';
import { SearchFlightByCityComponent } from './UserFunctions/search-flight-by-city/search-flight-by-city.component';
import { BookingComponent } from './UserFunctions/booking/booking.component';
import { AddFlightComponent } from './AdminFunctions/add-flight/add-flight.component';
import { UserLoginComponent } from './UserFunctions/user-login/user-login.component';
import { AdminLoginComponent } from './AdminFunctions/admin-login/admin-login.component';
import { LoginLandingComponent } from './UserFunctions/login-landing/login-landing.component';
import { PaymentDetailsComponent } from './UserFunctions/payment-details/payment-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListFlightsComponent } from './AdminFunctions/list-flights/list-flights.component';
import { AdminDashboardComponent } from './AdminFunctions/admin-dashboard/admin-dashboard.component';
import { AddPassengersComponent } from './UserFunctions/booking/add-passengers/add-passengers.component';
import { SeatsComponent } from './seats/seats.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent,
    FlightsComponent,
    UsersComponent,
    SearchFlightByCityComponent,
    BookingComponent,
    AddFlightComponent,
    UserLoginComponent,
    AdminLoginComponent,
    LoginLandingComponent,
    PaymentDetailsComponent,
    HomePageComponent,
    ListFlightsComponent,
    AdminDashboardComponent,
    AddPassengersComponent,
    SeatsComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



