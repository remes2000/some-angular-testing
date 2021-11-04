import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { RenderRequest } from '../interface/render-request';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input()
  public renderRequest: RenderRequest;

  constructor() { }

  ngOnInit(): void {
  }

}
