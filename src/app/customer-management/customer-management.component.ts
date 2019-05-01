import { Component, OnInit } from '@angular/core';
import { Customer } from '../pojo/customer';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  birthday: Date;
  notes: string;

  customer: Customer;
  customers: Customer[];

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('save');
  }
  clear() {
    console.log('clear');
  }
  delete(customer: Customer) {
    console.log('delete' + customer.name);
  }
  edit(customer: Customer) {
    console.log('edit' + customer.name);
  }
}
