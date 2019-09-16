import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEpocComponent } from './edit-epoc.component';

describe('EditEpocComponent', () => {
  let component: EditEpocComponent;
  let fixture: ComponentFixture<EditEpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
