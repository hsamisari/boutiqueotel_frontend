import { Injectable } from '@angular/core';
import { Registration } from 'src/app/pojo/auth/registration';
import { ConfigurationService } from '../configuration.service';
import { HttpClient } from '@angular/common/http';
import { filter, flatMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private configurationService: ConfigurationService) { }

  createRequest(registration: Registration): void {
    console.log(registration);
    const url = `${this.configurationService.getApiUrl('registration', 'create', [])}`;
    this.http.post(url, registration).subscribe(response => {
      console.log(response);
    });
  }

  listAll(): Observable<Registration> {
    const url = this.configurationService.getApiUrl('registration', 'listAll', []);
    return this.http.get(url).
      pipe(flatMap(resp => {
        // tslint:disable-next-line:no-string-literal
        return from(resp['_embedded'].registrations).
          pipe(filter(reg => (reg as Registration).status === 'pending')) as Observable<Registration>;
      }));
  }
}
