import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationoComponent } from './reservationo.component';

describe('ReservationoComponent', () => {
  let component: ReservationoComponent;
  let fixture: ComponentFixture<ReservationoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
