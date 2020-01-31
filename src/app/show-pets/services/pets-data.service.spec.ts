import { TestBed } from '@angular/core/testing';

import { PetsDataService } from './pets-data.service';

describe('PetsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetsDataService = TestBed.get(PetsDataService);
    expect(service).toBeTruthy();
  });
});
