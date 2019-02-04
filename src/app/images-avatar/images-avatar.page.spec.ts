import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesAvatarPage } from './images-avatar.page';

describe('ImagesAvatarPage', () => {
  let component: ImagesAvatarPage;
  let fixture: ComponentFixture<ImagesAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
