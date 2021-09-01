import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFlightsComponent } from './list-flights.component';

describe('ListFlightsComponent', () => {
  let component: ListFlightsComponent;
  let fixture: ComponentFixture<ListFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
