import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Color } from '../enum/color';
import { Shape } from '../enum/shape';
import { RenderRequest } from '../interface/render-request';
import { ShapeUtils } from '../shape-utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  public render: EventEmitter<RenderRequest> = new EventEmitter();

  public colors: Color[] = Object.values(Color);
  public shapes: Shape[] = Object.values(Shape);
  public control: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((v) => {
      if(ShapeUtils.isValidRenderRequestString(v)) {
        console.log(ShapeUtils.getRenderRequestFromString(v));
        this.render.emit(ShapeUtils.getRenderRequestFromString(v));
      }
    });
  }

}
