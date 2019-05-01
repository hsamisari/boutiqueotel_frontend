import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient, private config: ConfigurationService) { }
  log(user, message) {
    this.http.post(this.config.getApiUrl('log', 'create', []), { user: user.fullName, message });
  }
}
