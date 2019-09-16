import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPaliativosComponent } from './detail-paliativos.component';

describe('DetailPaliativosComponent', () => {
  let component: DetailPaliativosComponent;
  let fixture: ComponentFixture<DetailPaliativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPaliativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPaliativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
