import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/pojo/auth/user';
import { UserService } from 'src/app/services/auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  id: number = null;
  email = '';
  fullName = '';
  phoneNumber = '';
  admin = false;
  saveOperationResultMessage = 'İşlem devam ediyor';

  users: User[];
  user: User;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
    if (!this.user || !this.user.id) {
      this.route.navigate(['login']);
    } else {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
    }
  }
  save() {
    console.log(`email: ${this.email}\nfullName:${this.fullName}\nphoneNumber:${this.phoneNumber}`);
    const tobeSaved = new User();
    tobeSaved.email = this.email;
    tobeSaved.fullName = this.fullName;
    tobeSaved.phoneNumber = this.phoneNumber;
    tobeSaved.password = Math.round(Math.random() * 1000000) + '';
    tobeSaved.userCreated = this.user.id;
    tobeSaved.id = this.id;

    this.userService.save(tobeSaved).subscribe(resp => {
      console.log(resp);
      this.id = (resp as User).id;
      this.userService.addHotel(this.id, this.userService.getUser().hotels[0].id).subscribe(resp1 => {
        console.log(resp1);
        this.saveOperationResultMessage = 'Kullanıcı başarıyla kayıt edildi!';
      });
    });
  }
  edit(user: User) {
    this.email = user.email;
    this.fullName = user.fullName;
    this.phoneNumber = user.phoneNumber;
    this.id = user.id;
  }

  clear() {
    this.admin = false;
    this.email = '';
    this.fullName = '';
    this.phoneNumber = '';
    this.id = null;
  }

  delete(user: User) {
    this.userService.removeHotelUser(user.id, user.hotels[0].id).subscribe(resp => {
      console.log(resp);
    });
  }
}
