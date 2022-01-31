import { TestBed } from '@angular/core/testing';

import { BestSellingProductsService } from './best-selling-products.service';

describe('BestSellingProductsService', () => {
  let service: BestSellingProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestSellingProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
