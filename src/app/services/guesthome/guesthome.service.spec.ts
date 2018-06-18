import { TestBed, inject } from '@angular/core/testing';

import { GuesthomeService } from './guesthome.service';

describe('GuesthomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuesthomeService]
    });
  });

  it('should be created', inject([GuesthomeService], (service: GuesthomeService) => {
    expect(service).toBeTruthy();
  }));
});
