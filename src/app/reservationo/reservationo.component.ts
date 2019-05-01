import { Component, OnInit, Input } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../pojo/reservation';
import { Room } from '../pojo/room';
import { Customer } from '../pojo/customer';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-reservationo',
  templateUrl: './reservationo.component.html',
  styleUrls: ['./reservationo.component.scss']
})
export class ReservationoComponent implements OnInit {
  startDate: Date = null;
  endDate: Date = null;
  room: Room = null;
  customer: Customer = null;
  reservation: Reservation = null;
  rooms: Room[] = GlobalsService.rooms;
  customers: Customer[] = GlobalsService.customers;

  constructor(private reservationService: ReservationService, private globals: GlobalsService) {
  }

  ngOnInit() {
    this.reservation = new Reservation(this.room, new Date(), this.endDate);
    this.reservation.customer = this.customer;
    if (this.reservationService.dragging) {
      this.reservation = new Reservation(
        this.reservationService.reservationRoom,
        this.reservationService.reservationStartDate, this.endDate);
    } else {

    }
  }

  save() {

  }

  delete() { }

  clear() { }
}
