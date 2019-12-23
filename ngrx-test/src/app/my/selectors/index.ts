import { createFeatureSelector } from '@ngrx/store';
import * as fromReducer from '../reducers';

export const selectNumberState = createFeatureSelector<fromReducer.State, fromReducer.NumbersState>(
  fromReducer.myFeatureKey
);
