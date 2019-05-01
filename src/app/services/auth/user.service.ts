import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';
import { User } from 'src/app/pojo/auth/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationService } from '../configuration.service';
import { Hotel } from 'src/app/pojo/auth/hotel';
import { Room } from 'src/app/pojo/room';
import { RoomType } from 'src/app/pojo/room-type';
import { Transaction } from 'src/app/pojo/transaction';
import { RoomService } from '../room.service';
import { ReservationService } from '../reservation.service';
import { GlobalsService } from '../globals.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  static loadTransactions() {

  }

  static loadRooms(roomService: RoomService) {
    roomService.getAll().subscribe(rooms => {
      GlobalsService.rooms = rooms;
      window.localStorage.setItem('rooms', JSON.stringify(rooms));
    });
  }

  static loadRoomTypes(roomService: RoomService) {
    roomService.getRoomTypes().subscribe(roomTypes => {
      GlobalsService.roomTypes = roomTypes;
      window.localStorage.setItem('roomTypes', JSON.stringify(roomTypes));
    });
  }

  static loadCustomers(reservationService: ReservationService) {

  }

  static loadReservations(reservationService: ReservationService) {

  }


  static loadUserStaticData(roomService: RoomService, reservationService: ReservationService) {
    UserService.loadCustomers(reservationService);
    UserService.loadReservations(reservationService);
    UserService.loadRoomTypes(roomService);
    UserService.loadRooms(roomService);
    UserService.loadTransactions();
  }

  constructor(
    private http: HttpClient,
    private config: ConfigurationService,
    private roomService: RoomService,
    private reservationService: ReservationService) {
    console.log('Loading UserService');
  }

  login(username: string, password: string): Observable<User> {
    const url = this.config.getApiUrl('app-user', 'login', [username, password]);
    // tslint:disable-next-line:variable-name
    const _self = this;
    console.log(url);
    return this.http.get(url)
      .pipe(flatMap(resp => {
        // tslint:disable-next-line:no-string-literal
        return this.getUserHotels(resp['_embedded']['appUsers'][0].id)
          .pipe(map(hotels => {
            console.log(hotels);
            // tslint:disable-next-line:no-string-literal
            GlobalsService.userData = resp['_embedded']['appUsers'][0];
            GlobalsService.userData.hotels = hotels;
            if (hotels.length === 1) {
              GlobalsService.currentHotel = hotels[0];
              UserService.loadUserStaticData(this.roomService, this.reservationService);
            }
            return GlobalsService.userData;
          }));
      }));
  }

  getUserHotels(userId: number): Observable<Hotel[]> {
    const url = this.config.getApiUrl('app-user', 'getUserHotels', [userId + '']);
    // tslint:disable-next-line:variable-name
    const _self = this;
    console.log(url);
    return this.http.get(url)
      .pipe(map(resp => {
        // tslint:disable-next-line:no-string-literal
        return resp['_embedded'].hotels;
      }));
  }

  getUser(): User {
    console.log('getUser: UserService.userData');
    console.log(GlobalsService.userData);
    return GlobalsService.userData;
  }

  getUsers(): Observable<User[]> {
    const url = this.config.getApiUrl('app-user', 'getAll', [GlobalsService.userData.id + '']);
    return this.http.get(url)
      .pipe(flatMap(resp => {
        // tslint:disable-next-line:no-string-literal
        const hotels = resp['_embedded'].hotels;
        const url1 = this.config.getApiUrl('hotel', 'getUsers', [hotels[0].id + '']);
        return this.http.get(url1).pipe(map(resp1 => {
          // tslint:disable-next-line:no-string-literal
          return resp1['_embedded'].appUsers;
        }));
      }));

  }
  save(user: User): Observable<any> {
    if (user && !user.id && user.fullName && user.email && user.phoneNumber) {
      return this.http.post(this.config.getApiUrl('app-user', 'create', []), user);
    } else if (user && user.id && user.fullName && user.email && user.phoneNumber) {
      return this.http.put(this.config.getApiUrl('app-user', 'update', [user.id + '']), user);
    }
  }
  addHotel(userId: number, hotelId: number): Observable<any> {
    if (userId && hotelId) {
      const headers = new HttpHeaders('Content-Type: text/uri-list');
      const url = this.config.getApiUrl('app-user', 'addHotel', [userId + '']);
      const body = this.config.getApiUrl('hotel', 'get', [hotelId + '']);
      return this.http.patch(url, body, { headers });
    }
    return null;
  }
  removeHotelUser(userId: number, hotelId: number): Observable<any> {
    if (userId && hotelId) {
      const headers = new HttpHeaders('Content-Type: text/uri-list');
      const url = this.config.getApiUrl('app-user', 'removeHotel', [userId + '', hotelId + '']);
      return this.http.delete(url, { headers });
    }
    return null;
  }
}


