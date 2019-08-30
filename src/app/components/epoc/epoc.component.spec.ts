import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpocComponent } from './epoc.component';

describe('EpocComponent', () => {
  let component: EpocComponent;
  let fixture: ComponentFixture<EpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
