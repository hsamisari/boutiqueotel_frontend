import { Injectable } from '@angular/core';
import { User } from '../pojo/auth/user';
import { Hotel } from '../pojo/auth/hotel';
import { Room } from '../pojo/room';
import { RoomType } from '../pojo/room-type';
import { Transaction } from '../pojo/transaction';
import { Customer } from '../pojo/customer';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  static userData: User = new User();
  static currentHotel: Hotel = new Hotel();
  static rooms: Room[];
  static roomTypes: RoomType[];
  static transactions: Transaction[];
  static customers: Customer[];

  constructor() { }
}
