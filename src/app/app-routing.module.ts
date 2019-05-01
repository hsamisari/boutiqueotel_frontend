import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalanderComponent } from './calander/calander.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { UserManagementComponent } from './auth/user-management/user-management.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountManagementComponent } from './accounting/account-management/account-management.component';
import { HotelSelectorComponent } from './auth/login/hotel-selector/hotel-selector.component';
import { RoomManagementRoomTypeComponent } from './room-management-room-type/room-management-room-type.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';

const routes: Routes = [
  { path: 'calander', component: CalanderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'room-management', component: RoomManagementComponent },
  { path: 'account-management', component: AccountManagementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotel-selector', component: HotelSelectorComponent },
  { path: 'room-type', component: RoomManagementRoomTypeComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
