//IMPORT PROJECT MODULE
import
{
    ADD_TODO_ITEM,
    REMOVE_TODO_ITEM,
    IS_COMPLETED,
    ACTION_CHANGED,
    MARK_ALL_COMPLETED,
    MARK_ALL_INCOMPLETED,
    EDIT_TODO_ITEM
} from "./actionTypes";

// ACTION CREATORS
export const addTodoItem = (data) => ({ type: ADD_TODO_ITEM, payload: data });
export const removeTodoItem = (id) => ({ type: REMOVE_TODO_ITEM, payload: { id } });
export const editTodoItem = (id, text) => ({ type: EDIT_TODO_ITEM, payload: { id, text } });
export const radioAction = (action) => ({ type: ACTION_CHANGED, payload: { action } });
export const isCompleted = (id, isCompleted) => ({ type: IS_COMPLETED, payload: { id, isCompleted } });
export const markAllCompleted = (action) => ({ type: MARK_ALL_COMPLETED, payload: { type: action } });
export const markAllIncompleted = (action) => ({ type: MARK_ALL_INCOMPLETED, payload: { type: action } });

