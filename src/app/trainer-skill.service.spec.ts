import { TestBed } from '@angular/core/testing';

import { TrainerSkillService } from './trainer-skill.service';

describe('TrainerSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerSkillService = TestBed.get(TrainerSkillService);
    expect(service).toBeTruthy();
  });
});
