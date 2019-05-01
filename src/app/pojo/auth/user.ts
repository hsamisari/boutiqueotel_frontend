import { Hotel } from './hotel';

export class User {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    notes: string[];
    haveAccess: boolean;
    password: string;
    userCreated: number;
    hotels: Hotel[];
}
