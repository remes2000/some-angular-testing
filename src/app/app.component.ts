import { Component } from '@angular/core';
import { RenderRequest } from './interface/render-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'some-angular-testing';
  public renderRequest: RenderRequest;
}
