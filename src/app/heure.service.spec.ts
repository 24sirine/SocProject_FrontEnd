import { TestBed } from '@angular/core/testing';

import { HeureService } from './heure.service';

describe('HeureService', () => {
  let service: HeureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
