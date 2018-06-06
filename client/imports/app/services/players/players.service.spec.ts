import { TestBed, inject } from '@angular/core/testing';

import { PlayersService } from './player.service';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService]
    });
  });

  it('should be created', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});
