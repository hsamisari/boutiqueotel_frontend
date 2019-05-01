import { Component, OnInit, ApplicationRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/pojo/auth/user';
import { UserService } from 'src/app/services/auth/user.service';
import { Router } from '@angular/router';
import { AuditService } from 'src/app/services/audit.service';
import { tap } from 'rxjs/operators';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormControl implements OnInit {
  username = '';
  password = '';
  user: User;
  message = '';
  restored = false;

  constructor(private userService: UserService, private auditService: AuditService, private app: ApplicationRef, private route: Router) {
    super();
  }

  ngOnInit(): void {
    const storedUser = window.localStorage.getItem('session_user');
    if (storedUser) {
      this.user = JSON.parse(storedUser) as User;
      this.username = this.user.email;
      this.password = this.user.password;
      this.restored = true;
    } else {
      this.user = new User();
    }
  }

  login() {
    console.log(`username=${this.username}\npassword=${this.password}`);
    const call: Observable<User> = this.userService.login(this.username, this.password);

    call.subscribe(response => {
      if (response) {
        this.user = response;
        // remember credentials
        window.localStorage.setItem('session_user', JSON.stringify(this.user));

        if (GlobalsService.userData.hotels.length > 1) {
          this.route.navigate(['hotel-selector']);
        } else if (GlobalsService.userData.hotels.length === 1) {
          GlobalsService.currentHotel = GlobalsService.userData.hotels[0];
          GlobalsService.rooms = GlobalsService.userData.hotels[0].rooms;

          this.route.navigate(['dashboard']);
        }

        this.auditService.log(this.user.email, 'login success');
      } else {
        this.message = 'Lütfen tekrar deneyiniz!';
        this.auditService.log(this.username, 'login fail');
      }
    });

  }
}
