import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-component-one',
  template: '<p>dummy component one</p>'
})
export class DummyComponentOne {}

@Component({
  selector: 'app-dummy-component-two',
  template: '<p>dummy component two</p>'
})
export class DummyComponentTwo {}

@Component({
  selector: 'app-dummy-component-three',
  template: '<p>dummy component three</p>'
})
export class DummyComponentThree {}

@Component({
  selector: 'app-hide-button',
  templateUrl: './hide-button.component.html',
  styleUrls: ['./hide-button.component.scss']
})
export class HideButtonComponent implements OnInit {

  public isButtonVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
