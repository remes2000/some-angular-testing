import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public plusTwo(value: number) {
    return value + 2;
  }
}
