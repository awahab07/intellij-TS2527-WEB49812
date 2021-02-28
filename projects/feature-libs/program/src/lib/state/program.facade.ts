import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromProgram from './program.reducer';
import * as ProgramSelector from './program.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProgramFacade {
  name$ = this.store.select(ProgramSelector.selectProgramName);

  constructor(private readonly store: Store<fromProgram.State>) {
  }
}
