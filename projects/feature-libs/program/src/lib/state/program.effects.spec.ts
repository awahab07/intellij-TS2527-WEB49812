import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProgramEffects } from './program.effects';

describe('ProgramEffects', () => {
  let actions$: Observable<any>;
  let effects: ProgramEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProgramEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
