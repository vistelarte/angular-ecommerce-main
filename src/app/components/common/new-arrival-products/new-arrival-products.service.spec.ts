import { TestBed } from '@angular/core/testing';

import { NewArrivalProductsService } from './new-arrival-products.service';

describe('NewArrivalProductsService', () => {
  let service: NewArrivalProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewArrivalProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
