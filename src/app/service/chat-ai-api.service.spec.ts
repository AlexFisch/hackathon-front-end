import { TestBed } from '@angular/core/testing';

import { ChatAiApiServiceService } from './chat-ai-api.service';

describe('ChatAiApiServiceService', () => {
  let service: ChatAiApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatAiApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
