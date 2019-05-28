import { TestBed } from '@angular/core/testing';

import { WappApiService } from './wapp-api.service';

describe('WappApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WappApiService = TestBed.get(WappApiService);
    expect(service).toBeTruthy();
  });
});
