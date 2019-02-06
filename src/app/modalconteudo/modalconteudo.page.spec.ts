import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalconteudoPage } from './modalconteudo.page';

describe('ModalconteudoPage', () => {
  let component: ModalconteudoPage;
  let fixture: ComponentFixture<ModalconteudoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalconteudoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalconteudoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
