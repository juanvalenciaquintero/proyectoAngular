import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEpocComponent } from './menu-epoc.component';

describe('MenuEpocComponent', () => {
  let component: MenuEpocComponent;
  let fixture: ComponentFixture<MenuEpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
