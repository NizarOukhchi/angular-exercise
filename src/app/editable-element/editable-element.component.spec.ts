import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableElementComponent } from './editable-element.component';

describe('EditableElementComponent', () => {
  let component: EditableElementComponent;
  let fixture: ComponentFixture<EditableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
