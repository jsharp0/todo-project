import { Todo } from '../Models/todo.model';
import { TodoAction, TodoActionType } from '../Actions/todo.action';

const initialState: Array<Todo> = [
    {
        completed: true,
        text: 'Pick up milk'
    }
];

export function TodoReducer(
    state: Array<Todo> = initialState,
    action: TodoAction
) {
    switch (action.type) {
        case TodoActionType.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}
