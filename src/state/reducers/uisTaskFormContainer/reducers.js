import { Map } from 'immutable';
import * as types from './types';
import initialState from '../../initialState';

export default function (state = initialState.uisTaskFormContainer, action) {
  switch (action.type) {
    case types.SHOW_TASK_FORM:
      return state.set("contentKey", "TASK_FORM");
    case types.SHOW_DEFAULT:
      return state.set("contentKey", "DEFAULT");
    default:
      return state;
  }
}