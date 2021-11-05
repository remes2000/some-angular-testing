import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });

    service = TestBed.inject(MathService);
  });
  
  it('plusTwo(5) returns 7', () => {
    expect(service.plusTwo(5)).toBe(7);
  });

  it('plusTwo(-2) returns 0', () => {
    expect(service.plusTwo(-2)).toBe(0);
  });
});
