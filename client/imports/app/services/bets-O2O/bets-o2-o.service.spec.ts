import { TestBed, inject } from '@angular/core/testing';

import { BetsO2OService } from './bets-o2-o.service';

describe('BetsO2OService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetsO2OService]
    });
  });

  it('should be created', inject([BetsO2OService], (service: BetsO2OService) => {
    expect(service).toBeTruthy();
  }));
});
