import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navegacao2Page } from './navegacao2.page';

describe('Navegacao2Page', () => {
  let component: Navegacao2Page;
  let fixture: ComponentFixture<Navegacao2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navegacao2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navegacao2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
