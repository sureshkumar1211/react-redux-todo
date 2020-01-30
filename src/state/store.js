//IMPORT PACKAGE MODULE
import { createStore, combineReducers } from "redux";

//IMPORT PROJECT MODULE
import { todoReducers } from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const rootReducer = combineReducers({
    todo: todoReducers
});

export const store = createStore(rootReducer, persistedState);
store.subscribe(() =>
{
    saveState({
        todo: store.getState().todo
    })
});


