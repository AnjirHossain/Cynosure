import {Map} from 'immutable';
import * as types from './types';
import initialState from '../../initialState';

export default function (state = initialState.tasks, action) {
    switch (action.type) {
      case types.ADD_TASK:
        console.log('Taks to add: ', action.meta);
        return state;
      case types.DELETE_TASK:
        return state;
      case types.UPDATE_TASK:
        return state;
      default:
        return state;
    }
}