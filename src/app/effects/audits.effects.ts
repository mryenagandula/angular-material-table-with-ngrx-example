import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuditsService } from '../apis/audits.service';
import * as AuditsActions from "../actions/audits.actions";
import { map,mergeMap,catchError } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable()
export class AuditsEffects {

  constructor(private actions$: Actions,private auditService: AuditsService) {}

  loadAudits$ = createEffect(() => 
    this.actions$.pipe(
      ofType(AuditsActions.loadAudits),
      map((action: any) => action),
      mergeMap((action:any) => {
        return this.auditService.loadAudits(action.pageIndex,action.pageSize).pipe(
          map(data => AuditsActions.loadAuditsSuccess({ data })),
          catchError(error => of(AuditsActions.loadAuditsFailure({ error })))
        );
      })
    )
  )

}