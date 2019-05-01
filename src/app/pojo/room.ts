import { Hotel } from './auth/hotel';
import { RoomProperty } from './room-property';
import { RoomType } from './room-type';
import { Product } from './product';

export class Room extends Product {
    color: string;
    description: string;
    doorNumber: string;
    numberOfBeds: number;
    hotel: Hotel;
    type: RoomType;
    roomProperties: RoomProperty[];

    constructor(id?: number, name?: string, color?: string) {
        super();
        id ? this.id = id : this.id = null;
        color ? this.color = color : this.color = null;
        name ? this.name = name : this.name = null;
    }

}
