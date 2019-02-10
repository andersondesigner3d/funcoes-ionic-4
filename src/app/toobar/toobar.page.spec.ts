import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarPage } from './toobar.page';

describe('ToobarPage', () => {
  let component: ToobarPage;
  let fixture: ComponentFixture<ToobarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToobarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToobarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
