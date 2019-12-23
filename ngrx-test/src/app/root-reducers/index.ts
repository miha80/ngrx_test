import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

export interface State { }

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({ }),
});
