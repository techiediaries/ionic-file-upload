import { TestBed } from '@angular/core/testing';

import { UploadingService } from './uploading.service';

describe('UploadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadingService = TestBed.get(UploadingService);
    expect(service).toBeTruthy();
  });
});
