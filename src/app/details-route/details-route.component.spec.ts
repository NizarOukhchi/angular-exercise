import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRouteComponent } from './details-route.component';

describe('DetailsRouteComponent', () => {
  let component: DetailsRouteComponent;
  let fixture: ComponentFixture<DetailsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
