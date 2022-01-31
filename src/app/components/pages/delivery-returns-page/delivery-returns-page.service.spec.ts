import { TestBed } from '@angular/core/testing';

import { DeliveryReturnsPageService } from './delivery-returns-page.service';

describe('DeliveryReturnsPageService', () => {
  let service: DeliveryReturnsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryReturnsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
