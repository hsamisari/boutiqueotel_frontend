import { Menu } from '../menu';
import { Room } from '../room';
import { Reservation } from '../reservation';
import { Customer } from '../customer';
import { Employee } from '../employee';

export class Hotel {
    id: number;
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    menus: Menu[];
    rooms: Room[];
    reservations: Reservation[];
    customers: Customer[];
    employees: Employee[];
}
