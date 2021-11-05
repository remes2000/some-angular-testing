import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HideButtonComponent } from './hide-button.component';

describe('HideButtonComponent', () => {
  let component: HideButtonComponent;
  let fixture: ComponentFixture<HideButtonComponent>;
  const getButton = (): DebugElement => {
    return fixture.debugElement.query(By.css('button'));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideButtonComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('button should hide on click', () => {
    fixture.detectChanges();
    const button = getButton();
    expect(button).toBeTruthy('Button does not exist');
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(getButton()).toBeFalsy();
  });
});
