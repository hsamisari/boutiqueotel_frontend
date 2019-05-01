import { LedgerAccount } from './ledger-account';

export class Transaction {
    id: number;
    transactionDate: string;
    accountReceivable: LedgerAccount;
    accountPayable: LedgerAccount;
    amount: number;
    currency: string;
    description: string;
}
