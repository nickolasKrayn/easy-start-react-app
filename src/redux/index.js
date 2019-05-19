import { combineReducers } from 'redux'

export default function createReducer(asyncReducers) {
  return combineReducers({
      default: () => null,
    ...asyncReducers
  });
}
