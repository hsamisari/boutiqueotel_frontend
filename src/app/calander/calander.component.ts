import { Component, OnInit } from '@angular/core';
import { Room } from '../pojo/room';
import { Reservation } from '../pojo/reservation';
import { RoomDay } from '../pojo/room-day';
import { RoomService } from '../services/room.service';
import { RoomDayStatusComponent } from '../room-day-status/room-day-status.component';

const DAY_LONG = 24 * 60 * 60 * 1000;
const MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})

export class CalanderComponent implements OnInit {

  month = 'Mart';
  days: Date[];
  rooms: Room[];

  roomDays: RoomDay[];
  reservations: Reservation[];

  constructor() {
    const date = new Date();
    this.days = [];
    this.roomDays = [];
    this.rooms = [
      new Room(1, 'Kral Süiti No: 1', 'red'),
      new Room(3, 'Standart Oda No: 2', 'blue'),
      new Room(4, 'Standard Oda No: 3', 'blue'),
      new Room(5, 'Standard Oda No: 4', 'blue'),
      new Room(6, 'Standard Oda No: 5', 'blue'),
      new Room(7, 'Standard Oda No: 6', 'blue'),
      new Room(8, 'Standart Oda No: 7', 'blue'),
      new Room(9, 'Geniş Oda No: 8', 'green'),
      new Room(10, 'Geniş Oda No: 9', 'green')
    ];
    this.reservations = [
      new Reservation(new Room(1, 'Kral Süiti No: 1'), new Date(2014, 2, 1), new Date(2014, 2, 10)),
      new Reservation(new Room(1, 'Kral Süiti No: 1'), new Date(2014, 2, 11), new Date(2014, 2, 13)),
      new Reservation(new Room(1, 'Kral Süiti No: 1'), new Date(2014, 2, 13), new Date(2014, 2, 17)),
      new Reservation(new Room(1, 'Kral Süiti No: 1'), new Date(2014, 2, 17), new Date(2014, 2, 25)),

    ];
    date.setDate(1);
    date.setMonth(0);
    date.setFullYear(new Date().getFullYear());
    for (let i = 1; i < 365; i++) {
      this.days.push(new Date(date));
      date.setTime(date.getTime() + DAY_LONG);
      this.rooms.forEach(room => {
        this.roomDays.push(new RoomDay(room, new Date(date)));
      });
    }
    date.getDay();
  }



  ngOnInit() {
  }

  newReservation(room: Room, startDate: Date, endDate: Date) {
    this.reservations.push(new Reservation(room, startDate, endDate));
  }
  cancelReservation(room: Room, date: Date) {
    // this.reservations.splice();
    console.log('Cancel reservation');
  }

  getRoomDay(roomIndex: number, dayOfYear: number): RoomDay {
    return this.roomDays[this.days.length * roomIndex + dayOfYear];
  }
}
