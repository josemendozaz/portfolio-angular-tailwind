import { TestBed } from '@angular/core/testing';

import { ScreenLoadingService } from './screen-loading.service';

describe('ScreenLoadingService', () => {
  let service: ScreenLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
