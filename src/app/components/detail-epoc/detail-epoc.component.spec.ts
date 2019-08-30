import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEpocComponent } from './detail-epoc.component';

describe('DetailEpocComponent', () => {
  let component: DetailEpocComponent;
  let fixture: ComponentFixture<DetailEpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
