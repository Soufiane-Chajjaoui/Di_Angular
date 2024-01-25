import { TestBed } from '@angular/core/testing';

import { InjectWithTokenService } from './inject-with-token.service';

describe('InjectWithTokenService', () => {
  let service: InjectWithTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectWithTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
