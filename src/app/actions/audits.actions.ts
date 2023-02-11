import { createAction, props } from '@ngrx/store';

export const loadAudits = createAction(
  '[Audits] Load Audits',
  props<{pageIndex:number,pageSize:number}>()
);

export const loadAuditsSuccess = createAction(
  '[Audits] Load Audits Success',
  props<{ data: any }>()
);

export const loadAuditsFailure = createAction(
  '[Audits] Load Audits Failure',
  props<{ error: any }>()
);
