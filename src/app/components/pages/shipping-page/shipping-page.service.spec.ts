import { TestBed } from '@angular/core/testing';

import { ShippingPageService } from './shipping-page.service';

describe('ShippingPageService', () => {
  let service: ShippingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
