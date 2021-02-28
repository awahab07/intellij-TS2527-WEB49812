import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProgram from './program.reducer';

export const selectProgramState = createFeatureSelector<fromProgram.State>(
  fromProgram.programFeatureKey
);

export const selectProgramName = createSelector(
  selectProgramState,
  (state: fromProgram.State) => state.name
);
