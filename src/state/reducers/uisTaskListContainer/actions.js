import * as types from "./types";

export const setCurrentSelectedList = currentSelectedListId => {
    return { type: types.SET_SELECTED_LIST, meta: { currentSelectedListId } };
};
export const expandTask = meta => ({
    type: types.EXPAND_TASK_DETAILS,
    meta: {
        taskId: meta.taskId,
        selectedListId: meta.selectedListId
    }
});
