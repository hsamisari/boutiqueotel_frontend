import { Room } from './room';
import { Customer } from './customer';

export class Reservation {
    id: number;
    room: Room;
    customer: Customer;
    startDate: Date;
    endDate: Date;
    constructor(room: Room, startDate: Date, endDate: Date) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.room = room;
    }
}
