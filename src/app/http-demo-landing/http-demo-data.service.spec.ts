import { TestBed } from '@angular/core/testing';

import { HttpDemoDataService } from './http-demo-data.service';

describe('HttpDemoDataService', () => {
  let service: HttpDemoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDemoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
