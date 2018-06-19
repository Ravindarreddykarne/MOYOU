import { TestBed, inject } from '@angular/core/testing';

import { CreatevideoService } from './createvideo.service';

describe('CreatevideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatevideoService]
    });
  });

  it('should be created', inject([CreatevideoService], (service: CreatevideoService) => {
    expect(service).toBeTruthy();
  }));
});
