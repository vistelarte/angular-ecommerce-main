import { TestBed } from '@angular/core/testing';

import { CollectionAdsService } from './collection-ads.service';

describe('CollectionAdsService', () => {
  let service: CollectionAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
