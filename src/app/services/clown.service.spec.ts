import { TestBed } from '@angular/core/testing';

import { ClownService } from './clown.service';

describe('ClownService', () => {
  let service: ClownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
