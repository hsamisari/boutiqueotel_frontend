import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../pojo/auth/hotel';
import { Room } from '../pojo/room';
import { ConfigurationService } from './configuration.service';
import { map, flatMap } from 'rxjs/operators';
import { UserService } from './auth/user.service';
import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService implements OnInit {
  hotel: Hotel = null;
  rooms: Room[] = null;

  constructor(private http: HttpClient, private config: ConfigurationService, private globals: GlobalsService) { }

  ngOnInit(): void {
  }

  getRoomTypes() {
    const url = this.config.getApiUrl('hotel', 'getRoomTypes', [GlobalsService.currentHotel.id + '']);
    return this.http.get(url)
      .pipe(map(resp => {
          // tslint:disable-next-line:no-string-literal
          return resp['_embedded'].roomTypes;
      }));
  }

  getAll(): Observable<Room[]> {
    const url = this.config.getApiUrl('hotel', 'getRooms', [GlobalsService.currentHotel.id + '']);
    return this.http.get(url)
      .pipe(map(resp => {
          // tslint:disable-next-line:no-string-literal
          return resp['_embedded'].rooms;
      }));
  }
  save(hotelId: number, room: Room) {
    const url = this.config.getApiUrl('room', 'create', []);
    const urlAppend = this.config.getApiUrl('room', 'append', [GlobalsService.currentHotel.id + '']);
    const headers = new HttpHeaders('Content-Type: text/uri-list');
    this.http.post(url, room).subscribe(rom => {
      // console.log(rom);
      const bodyAppend = `/api/room/${(rom as Room).id}`;
      this.http.patch(urlAppend, bodyAppend, { headers }).subscribe(resp => {
        console.log(resp);
      });
    });

  }
  removeHotelRoom(roomId: number, hotelId: number) {

  }
}
