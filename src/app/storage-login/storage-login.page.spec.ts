import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLoginPage } from './storage-login.page';

describe('StorageLoginPage', () => {
  let component: StorageLoginPage;
  let fixture: ComponentFixture<StorageLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
