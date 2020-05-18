import { TestBed } from '@angular/core/testing';

import { ServicewithparamService } from './servicewithparam.service';

describe('ServicewithparamService', () => {
  let service: ServicewithparamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicewithparamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
