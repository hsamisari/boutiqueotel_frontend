import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDayStatusComponent } from './room-day-status.component';

describe('RoomDayStatusComponent', () => {
  let component: RoomDayStatusComponent;
  let fixture: ComponentFixture<RoomDayStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDayStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDayStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
