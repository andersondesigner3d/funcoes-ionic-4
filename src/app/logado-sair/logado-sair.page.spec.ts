import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogadoSairPage } from './logado-sair.page';

describe('LogadoSairPage', () => {
  let component: LogadoSairPage;
  let fixture: ComponentFixture<LogadoSairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogadoSairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogadoSairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
