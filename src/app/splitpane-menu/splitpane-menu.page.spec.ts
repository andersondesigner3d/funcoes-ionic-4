import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitpaneMenuPage } from './splitpane-menu.page';

describe('SplitpaneMenuPage', () => {
  let component: SplitpaneMenuPage;
  let fixture: ComponentFixture<SplitpaneMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitpaneMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitpaneMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
