import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitescrollPage } from './infinitescroll.page';

describe('InfinitescrollPage', () => {
  let component: InfinitescrollPage;
  let fixture: ComponentFixture<InfinitescrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinitescrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitescrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
