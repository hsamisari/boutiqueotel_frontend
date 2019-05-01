import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../pojo/room';
import { Reservation } from '../pojo/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-room-day-status',
  templateUrl: './room-day-status.component.html',
  styleUrls: ['./room-day-status.component.scss']
})
export class RoomDayStatusComponent implements OnInit {
  @Input() day: Date;
  @Input() room: Room;
  @Input() status: string;

  dayClass = 'day';
  reservation: Reservation;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.dayClass = this.dayClass + '-' + this.status;
  }

  edit() {
    console.log('edit');
  }

  startReservation() {
    console.log('reservation start:' + this.day + ' - ' + JSON.stringify(this.room));

    if (this.dayClass === 'day-checkout') {
      this.reservationService.start(this.day, this.room);
      this.dayClass = 'day-free day-checkinout';
    } else if (this.dayClass === 'day-free') {
      this.reservationService.start(this.day, this.room);
      this.dayClass = 'day-free day-checkin';
    } else if (this.dayClass === 'day-reserved') {
      alert('Bu oda zaten rezerve edilmiş!');
    } else if (this.dayClass === 'day-checkout') {
      alert('Bu oda zaten rezerve edilmiş!');
    }
  }
  drag() {
    if (this.reservationService.dragging
      && this.reservationService.reservationRoom.id === this.room.id) {
      this.reservationService.drag(this.day, this.room);
      this.dayClass = 'day-free day-reserved';
    }
  }
  drop() {
    if (this.reservationService.dragging) {
      this.reservationService.stopDrag();
      this.dayClass = 'day-free day-checkout';
    }
  }
}
