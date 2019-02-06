import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverinternoComponent } from './popoverinterno.component';

describe('PopoverinternoComponent', () => {
  let component: PopoverinternoComponent;
  let fixture: ComponentFixture<PopoverinternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverinternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverinternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
