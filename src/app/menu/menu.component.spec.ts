import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Color } from '../enum/color';
import { Shape } from '../enum/shape';
import { RenderRequest } from '../interface/render-request';

import { MenuComponent } from './menu.component';

@Component({
  template: `
    <app-menu (render)="renderRequest = $event" ></app-menu>
  `
})
class TestHostComponent {
  public renderRequest: RenderRequest;
}

describe('MenuComponent', () => {
  describe('when standalone', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MenuComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MenuComponent);
      component = fixture.componentInstance;
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('when inside a test host', () => {
    let testHost: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    const getInput = () => {
      return testHostFixture.debugElement.query(By.css('input'));
    }
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ TestHostComponent, MenuComponent ],
        imports: [ ReactiveFormsModule ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      testHostFixture = TestBed.createComponent(TestHostComponent);
      testHost = testHostFixture.componentInstance;
    });
  
    it('should emit RenderRequest when valid RenderRequestString provided in text field', () => {
      const renderRequestString = 'blue circle';
  
      testHostFixture.detectChanges();
      const input = getInput();
      expect(input).toBeTruthy('Input does not exist');
      const inputNativeEl = input.nativeElement;
      inputNativeEl.value = renderRequestString;
      inputNativeEl.dispatchEvent(new Event('input'));
      testHostFixture.detectChanges();
  
      expect(testHost.renderRequest).toEqual({
        shape: Shape.CIRCLE,
        color: Color.BLUE
      });
    });
  });
});