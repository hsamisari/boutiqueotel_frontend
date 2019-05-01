import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../pojo/customer';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private config: ConfigurationService) { }

  getAll(): Observable<Customer[]> {
    const url: string = this.config.getApiUrl('customer', 'getAll', []);
    return this.http.get(url) as Observable<Customer[]>;
  }
}
