import { TestBed, inject } from '@angular/core/testing';

import { AutenticathorService } from './autenticathor.service';

describe('AutenticathorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticathorService]
    });
  });

  it('should be created', inject([AutenticathorService], (service: AutenticathorService) => {
    expect(service).toBeTruthy();
  }));
});
