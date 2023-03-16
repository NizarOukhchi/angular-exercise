import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRouteComponent } from './not-found-route.component';

describe('NotFoundRouteComponent', () => {
  let component: NotFoundRouteComponent;
  let fixture: ComponentFixture<NotFoundRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
