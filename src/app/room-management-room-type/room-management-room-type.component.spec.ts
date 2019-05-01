import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomManagementRoomTypeComponent } from './room-management-room-type.component';

describe('RoomManagementRoomTypeComponent', () => {
  let component: RoomManagementRoomTypeComponent;
  let fixture: ComponentFixture<RoomManagementRoomTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomManagementRoomTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomManagementRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
