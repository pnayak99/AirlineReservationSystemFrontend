import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightByCityComponent } from './search-flight-by-city.component';

describe('SearchFlightByCityComponent', () => {
  let component: SearchFlightByCityComponent;
  let fixture: ComponentFixture<SearchFlightByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
