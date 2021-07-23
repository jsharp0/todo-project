import { Todo } from '../Models/todo.model';
import { TodoAction, TodoActionType } from '../Actions/todo.action';
import { moveItemInArray } from '@angular/cdk/drag-drop';

const initialState: Array<Todo> = [];

export function TodoReducer(
    state: Array<Todo> = initialState,
    action: any
) {
    switch (action.type) {
        case TodoActionType.ADD_ITEM:
            return [...state, action.payload];
        case TodoActionType.REMOVE_ITEM:
            const remState = [...state];
            remState.splice(action.payload, 1);
            return remState;
        case TodoActionType.UPDATE_ITEM:
            const updateState = [...state];
            const index = updateState.findIndex(todo => todo === action.payload);
            updateState.splice(index, 1, action.newItem);
            return updateState;
        case TodoActionType.MOVE_ITEM:
            const moveState = [...state];
            moveItemInArray(moveState, action.previousPosition, action.newPostionn);
            return moveState;
        default:
            return state;
    }
}
