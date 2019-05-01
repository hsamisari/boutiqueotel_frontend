import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Registration } from 'src/app/pojo/auth/registration';
import { RegistrationService } from 'src/app/services/auth/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends FormControl implements OnInit {
  registration: Registration = {
    hotelName: '',
    hotelEmail: '',
    hotelPhoneNumber: '',
    contactFullName: '',
    contactPhoneNumber: '',
    contactRelationshipToHotel: '',
    status: 'pending'
  };

  constructor(private registrationService: RegistrationService) {
    super();
  }

  ngOnInit() {
  }

  submit() {
    this.registrationService.createRequest(this.registration);
  }
}
