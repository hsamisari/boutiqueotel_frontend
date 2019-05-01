import { Room } from './room';
import { Reservation } from './reservation';

export class RoomDay {
    private reservationValue: Reservation;

    get reservation(): Reservation {
        return this.reservationValue;
    }
    set reservation(theReservation: Reservation) {
        this.reservationValue = theReservation;
    }
    constructor(private room: Room, private day: Date) {
    }
}
