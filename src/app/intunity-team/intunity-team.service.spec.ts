import { TestBed, inject } from '@angular/core/testing';

import { IntunityTeamService } from './intunity-team.service';

describe('IntunityTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntunityTeamService]
    });
  });

  it('should be created', inject([IntunityTeamService], (service: IntunityTeamService) => {
    expect(service).toBeTruthy();
  }));
});
