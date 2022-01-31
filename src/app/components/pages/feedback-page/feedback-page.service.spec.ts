import { TestBed } from '@angular/core/testing';

import { FeedbackPageService } from './feedback-page.service';

describe('FeedbackPageService', () => {
  let service: FeedbackPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
