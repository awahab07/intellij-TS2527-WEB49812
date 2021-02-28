import { TestBed } from '@angular/core/testing';

import { TypesLibService } from './types-lib.service';

describe('TypesLibService', () => {
  let service: TypesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
