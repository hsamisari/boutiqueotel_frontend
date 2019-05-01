import { CustomerAccount } from './customer-account';

export class CustomerAccountItem {
    id: number;
    account: CustomerAccount;
    date: Date;
    description: string;
    credit: number;
    debit: number;
}
