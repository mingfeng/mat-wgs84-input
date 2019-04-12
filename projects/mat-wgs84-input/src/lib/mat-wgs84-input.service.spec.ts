import { TestBed } from '@angular/core/testing';

import { MatWgs84InputService } from './mat-wgs84-input.service';

describe('MatWgs84InputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatWgs84InputService = TestBed.get(MatWgs84InputService);
    expect(service).toBeTruthy();
  });
});
