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
});
