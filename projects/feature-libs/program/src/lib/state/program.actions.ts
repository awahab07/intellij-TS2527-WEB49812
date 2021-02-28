import { createAction, props } from '@ngrx/store';

export const loadPrograms = createAction(
  '[Program] Load Programs'
);

export const loadProgramsSuccess = createAction(
  '[Program] Load Programs Success',
  props<{ data: any }>()
);

export const loadProgramsFailure = createAction(
  '[Program] Load Programs Failure',
  props<{ error: any }>()
);
