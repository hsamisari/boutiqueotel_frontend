import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/pojo/transaction';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {

  transactionDate: Date;
  description: string;
  accountReceivable: string;
  accountPayable: string;
  amount: number;
  vat: number;
  currency: string;
  documentNo: string;
  documentType: string;

  transactions: Transaction[];

  constructor() { }

  ngOnInit() {

  }

  save() {
    console.log();
  }
  edit(transaction: Transaction) {
    console.log(transaction);
  }
}
