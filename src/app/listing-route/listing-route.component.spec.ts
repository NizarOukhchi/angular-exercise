import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingRouteComponent } from './listing-route.component';

describe('ListingRouteComponent', () => {
  let component: ListingRouteComponent;
  let fixture: ComponentFixture<ListingRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
