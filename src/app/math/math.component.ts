import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MathService } from '../service/math/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  public inputValue: number;
  public resultValue: number;

  constructor(
    private mathService: MathService
  ) { }

  ngOnInit(): void {
  }

  public calculateResult(): void {
    if(typeof this.inputValue === 'number') {
      this.resultValue = this.mathService.plusTwo(this.inputValue);
    } else {
      this.resultValue = undefined;
    }
  }
}
