import { Todo } from '../Models/todo.model';
import { TodoAction, TodoActionType } from '../Actions/todo.action';

const initialState: Array<Todo> = [
    {
        completed: true,
        text: 'Pick up milk'
    },
    {
        completed: false,
        text: 'Pick up orange juice'
    }
];

export function TodoReducer(
    state: Array<Todo> = initialState,
    action: any
) {
    switch (action.type) {
        case TodoActionType.ADD_ITEM:
            return [...state, action.payload];
        case TodoActionType.REMOVE_ITEM:
            console.log('state: ');
            console.log(state);
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}
