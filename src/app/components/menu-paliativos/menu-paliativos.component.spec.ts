import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaliativosComponent } from './menu-paliativos.component';

describe('MenuPaliativosComponent', () => {
  let component: MenuPaliativosComponent;
  let fixture: ComponentFixture<MenuPaliativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPaliativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPaliativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
