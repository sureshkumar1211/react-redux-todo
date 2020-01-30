//IMPORT PROJECT MODULE
import
{
    ADD_TODO_ITEM,
    MARK_ALL_COMPLETED,
    MARK_ALL_INCOMPLETED,
    REMOVE_TODO_ITEM,
    IS_COMPLETED,
    ACTION_CHANGED,
    EDIT_TODO_ITEM
} from "./actionTypes";

const initialState = {
    todoList: [],
    action: "ALL"
};


const doAction = (state, action, isCompleted) =>
{
    switch (action.payload.type)
    {
        case "ALL": {
            let todoList = [...state.todoList];
            todoList.map((item) =>
            {
                item.isCompleted = isCompleted;
                return item;
            });
            return { ...state, todoList };
        }
        case "ACTIVE": {
            let todoList = [...state.todoList];
            let newTodoList = todoList.map((item) =>
            {
                if (!item.isCompleted)
                {
                    item.isCompleted = isCompleted;
                }
                return item;
            });
            return { ...state, todoList: newTodoList };
        }
        case "COMPLETED": {
            let todoList = [...state.todoList];
            let newTodoList = todoList.map((item) =>
            {
                if (item.isCompleted)
                {
                    item.isCompleted = isCompleted;
                }
                return item;
            });
            return { ...state, todoList: newTodoList };
        }
        default:
            return state;
    }
}

export const todoReducers = (state = initialState, action) =>
{
    switch (action.type)
    {
        case ADD_TODO_ITEM: {
            let todoList = [...state.todoList]
            todoList.push(action.payload);
            return { ...state, todoList, activeItems: todoList };
        }
        case REMOVE_TODO_ITEM: {
            let todoList = [...state.todoList];
            let findIndex = todoList.findIndex((item) => action.payload.id === item.id);
            todoList.splice(findIndex, 1);
            return { ...state, todoList };
        }
        case EDIT_TODO_ITEM: {
            let todoList = [...state.todoList];
            let findIndex = todoList.findIndex((item) => action.payload.id === item.id);
            todoList[findIndex].text = action.payload.text;
            return { ...state, todoList };
        }
        case IS_COMPLETED: {
            let todoList = [...state.todoList];
            let findIndex = todoList.findIndex((item) => action.payload.id === item.id);
            todoList[findIndex].isCompleted = action.payload.isCompleted;
            return { ...state, todoList };
        }
        case ACTION_CHANGED:
            return { ...state, action: action.payload.action }
        case MARK_ALL_COMPLETED:
            return doAction(state, action, true);
        case MARK_ALL_INCOMPLETED:
            return doAction(state, action, false);
        default:
            return state;
    }
}