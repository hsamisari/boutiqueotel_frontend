import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../pojo/room';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../pojo/reservation';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.scss']
})
export class RoomStatusComponent implements OnInit {
  @Input() room: Room;
  @Input() days: Date[];
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservations = this.reservationService.getRoomReservations(this.room);
  }

  getStatus(day: Date): string {
    const reservation: Reservation =
      this.reservations.find(value => value.startDate.getTime() < day.getTime() && value.endDate.getTime() > day.getTime());
    return reservation ? 'reserved' : 'free';
  }
}
