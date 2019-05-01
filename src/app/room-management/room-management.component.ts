import { Component, OnInit } from '@angular/core';
import { Room } from '../pojo/room';
import { RoomService } from '../services/room.service';
import { Router } from '@angular/router';
import { User } from '../pojo/auth/user';
import { UserService } from '../services/auth/user.service';
import { Hotel } from '../pojo/auth/hotel';
import { RoomType } from '../pojo/room-type';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {
  types: string[] = ['Standart 2 kişilik', 'Standart 3 kişilik', 'Delux 2 kişilik', 'Kral Süiti'];
  id: number = null;
  name = '';
  description = '';
  doorNumber = '';
  numberOfBeds = 1;
  type: RoomType = null;

  user: User;
  hotel: Hotel;
  rooms: Room[];
  room: Room;
  constructor(private roomService: RoomService, private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    // User shall be logged in
    if (!this.user || !this.user.id) {
      this.route.navigate(['login']);
    } else {
      // Logged in user shall be registered t at least 1 hotel
      this.hotel = GlobalsService.currentHotel;
      if (!this.hotel || !this.hotel.id) {
        alert('Kullanıcı Tanımları eksik!');
        this.route.navigate(['login']);
      } else {
          this.rooms = GlobalsService.rooms;
      }
    }
  }

  save() {
    console.log(`name: ${this.name}
                 description:${this.description}
                 doorNumber:${this.doorNumber}
                 numberOfBeds:${this.numberOfBeds}`);
    const tobeSaved = new Room(this.id, this.name, 'red');
    tobeSaved.name = this.name;
    tobeSaved.description = this.description;
    tobeSaved.doorNumber = this.doorNumber;
    tobeSaved.numberOfBeds = this.numberOfBeds;
    tobeSaved.id = this.id;

    this.roomService.save(this.user.hotels[0].id,
      tobeSaved);
    // .subscribe(resp => {
    //   console.log(resp);
    //   this.id = (resp as Room).id;
    // this.roomService.addRoom(this.userService.getUser().hotels[0].id, this.id).subscribe(resp1 => {
    //   console.log(resp1);
    // });
    // });
  }
  edit(room: Room) {
    this.name = room.name;
    this.description = room.description;
    this.doorNumber = room.doorNumber;
    this.numberOfBeds = room.numberOfBeds;
    this.id = room.id;
  }

  clear() {
    this.name = '';
    this.description = '';
    this.doorNumber = '';
    this.numberOfBeds = 1;
    this.id = null;
  }

  delete(room: Room) {
    this.roomService.removeHotelRoom(room.id, room.hotel.id);
  }
}
