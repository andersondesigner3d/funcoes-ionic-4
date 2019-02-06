import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navegacao3Page } from './navegacao3.page';

describe('Navegacao3Page', () => {
  let component: Navegacao3Page;
  let fixture: ComponentFixture<Navegacao3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navegacao3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navegacao3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
