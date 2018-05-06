import * as types from './types';

export const addTask = (meta) => ({
    type: types.ADD_TASK,
    meta
});

export const deleteTask = (meta) => ({
    type: types.DELETE_TASK,
    meta
});

export const updateTask = (meta) => ({
    type: types.UPDATE_TASK,
    meta
});