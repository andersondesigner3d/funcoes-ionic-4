import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTransferPage } from './file-transfer.page';

describe('FileTransferPage', () => {
  let component: FileTransferPage;
  let fixture: ComponentFixture<FileTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
