import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-management-room-type',
  templateUrl: './room-management-room-type.component.html',
  styleUrls: ['./room-management-room-type.component.scss']
})
export class RoomManagementRoomTypeComponent implements OnInit {
  types: string[] = ['Standart 2 kişilik', 'Standart 3 kişilik', 'Delux 2 kişilik', 'Kral Süiti'];
  id: number = null;
  name = '';
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Save clicked');
  }
  clear() {
    console.log('Save clicked');
  }
  delete() {
    console.log('Save clicked');
  }

  edit(type: string) {
    this.name = type;

  }
}
