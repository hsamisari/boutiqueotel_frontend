import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalanderComponent } from './calander/calander.component';
import { RoomDayStatusComponent } from './room-day-status/room-day-status.component';
import { RoomStatusComponent } from './room-status/room-status.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementComponent } from './auth/user-management/user-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { UserService } from './services/auth/user.service';
import { AccountManagementComponent } from './accounting/account-management/account-management.component';
import { HotelSelectorComponent } from './auth/login/hotel-selector/hotel-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { RoomManagementRoomTypeComponent } from './room-management-room-type/room-management-room-type.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ReservationoComponent } from './reservationo/reservationo.component';

@NgModule({
  declarations: [
    AppComponent,
    CalanderComponent,
    RoomDayStatusComponent,
    RoomStatusComponent,
    LoginComponent,
    RegistrationComponent,
    UserManagementComponent,
    DashboardComponent,
    RoomManagementComponent,
    AccountManagementComponent,
    HotelSelectorComponent,
    RoomManagementRoomTypeComponent,
    CustomerManagementComponent,
    ReservationoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
