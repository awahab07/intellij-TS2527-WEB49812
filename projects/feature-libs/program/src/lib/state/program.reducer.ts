import { createReducer, on } from '@ngrx/store';
import { ProgramName } from '../models';
import * as ProgramActions from './program.actions';

export const programFeatureKey = 'program';

export interface State {
  name: ProgramName;
  sessionCount: number;
}

export const initialState: State = {
  name: 'example name',
  sessionCount: 0
};


export const reducer = createReducer(
  initialState,

  on(ProgramActions.loadPrograms, state => state),
  on(ProgramActions.loadProgramsSuccess, (state, action) => state),
  on(ProgramActions.loadProgramsFailure, (state, action) => state),
);

