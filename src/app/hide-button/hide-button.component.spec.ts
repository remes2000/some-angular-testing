import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HideButtonComponent } from './hide-button.component';

describe('HideButtonComponent', () => {
  let component: HideButtonComponent;
  let fixture: ComponentFixture<HideButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideButtonComponent);
    component = fixture.componentInstance;
  });
});
