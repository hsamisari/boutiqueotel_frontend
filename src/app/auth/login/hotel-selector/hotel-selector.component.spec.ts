import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSelectorComponent } from './hotel-selector.component';

describe('HotelSelectorComponent', () => {
  let component: HotelSelectorComponent;
  let fixture: ComponentFixture<HotelSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
