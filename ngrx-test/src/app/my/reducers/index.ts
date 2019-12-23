import * as fromRoot from '../../root-reducers/';
import * as fromActions from '../actions/number.actions';
import { Action, combineReducers, createReducer, on } from '@ngrx/store';

export const myFeatureKey = 'myFeature';

export interface NumbersState {
  first: number;
  second: number;
}

const initialState: NumbersState = {
  first: -5,
  second: 10,
}

export interface State extends fromRoot.State {
  [myFeatureKey]: NumbersState;
}

const numbersReducer = createReducer(
  initialState,
  on(fromActions.increase, (state: NumbersState) => {
    return {
      ...state,
      first: state.first + 1,
    };
  }),
  on(fromActions.decrease, (state: NumbersState) => {
    return {
      ...state,
      second: state.second - 1,
    };
  }),
)
export function reducers(state: NumbersState | undefined, action: Action) {
  return numbersReducer(state, action);
}
