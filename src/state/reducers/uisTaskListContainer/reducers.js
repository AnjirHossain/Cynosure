import { Map } from 'immutable';
import * as types from './types';
import initialState from '../../initialState';

export default function (state = initialState.uisTaskFormContainer, action) {
    switch (action.type) {
        case types.SET_SELECTED_LIST:
            return state.set("currentSelectedListId", action.meta.currentSelectedListId);
        case types.EXPAND_TASK_DETAILS:
            let { meta } = action;

            return state.set("expandedTask", Map({
                taskId: meta.taskId,
                selectedListId: meta.selectedListId
              }));
        default:
            return state;
    }
}