import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProgramActions from './program.actions';



@Injectable()
export class ProgramEffects {

  loadPrograms$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ProgramActions.loadPrograms),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ProgramActions.loadProgramsSuccess({ data })),
          catchError(error => of(ProgramActions.loadProgramsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
