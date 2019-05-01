import { Injectable } from '@angular/core';
import { Room } from '../pojo/room';
import { Reservation } from '../pojo/reservation';
import { Customer } from '../pojo/customer';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationStartDate: Date;
  reservationEndDate: Date;
  reservationRoom: Room;
  reservationCustomer: Customer;
  reservations: Reservation[] = [];
  dragging = false;

  constructor() { }

  start(date: Date, room: Room): void {
    this.reservationStartDate = date;
    this.reservationRoom = room;
    this.dragging = true;
  }

  drag(date: Date, room: Room) {
    this.reservationEndDate = date;
  }

  stopDrag() {
    this.reservations.push(new Reservation(this.reservationRoom, this.reservationStartDate, this.reservationEndDate));
    this.dragging = false;
    this.reservationStartDate = null;
    this.reservationEndDate = null;
    this.reservationRoom = null;
  }

  setCustomer(customer: Customer) {
    this.reservationCustomer = customer;
  }

  getRoomReservations(room: Room): Reservation[] {
    return this.reservations.filter((value: Reservation) => value.room.id === room.id)
      .sort((a: Reservation, b: Reservation) => a.startDate.getTime() - b.startDate.getTime());
  }
}
