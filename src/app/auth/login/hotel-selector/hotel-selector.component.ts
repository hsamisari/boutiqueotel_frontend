import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/pojo/auth/hotel';
import { UserService } from 'src/app/services/auth/user.service';
import { Router } from '@angular/router';
import { AuditService } from 'src/app/services/audit.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-hotel-selector',
  templateUrl: './hotel-selector.component.html',
  styleUrls: ['./hotel-selector.component.scss']
})
export class HotelSelectorComponent implements OnInit {
  hotels: Hotel[];
  constructor(private userService: UserService, private route: Router, private auditService: AuditService) { }

  ngOnInit() {
    this.userService.getUserHotels(this.userService.getUser().id)
      .subscribe(hotels => {
        this.hotels = hotels;
      });
  }
  setCurrentHotel(hotel: Hotel) {
    GlobalsService.currentHotel = hotel;
    GlobalsService.rooms = hotel.rooms;
    // GlobalsService.customers = getHotelCustomers();

    this.route.navigate(['dashboard']);
    this.auditService.log(this.userService.getUser().email, 'login success');
  }
}
