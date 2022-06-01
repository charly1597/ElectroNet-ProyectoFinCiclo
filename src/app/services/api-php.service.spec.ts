import { TestBed } from '@angular/core/testing';

import { ApiPhpService } from './api-php.service';

describe('ApiPhpService', () => {
  let service: ApiPhpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPhpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
