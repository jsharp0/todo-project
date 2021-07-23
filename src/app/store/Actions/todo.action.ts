import { Action } from '@ngrx/store';
import { Todo } from '../Models/todo.model';

// Every NgRx Action has two main properties: type and optional payload
export enum TodoActionType {
    ADD_ITEM = '[TODO] Add Todo',
    REMOVE_ITEM = '[TODO] Remove Todo',
    UPDATE_ITEM = '[TODO] Update Todo'
}
export class AddItemAction implements Action {
    // Here's the type
    readonly type = TodoActionType.ADD_ITEM;

    // And here's the optional payload
    constructor(public payload: Todo) {}
}

export class RemoveItemAction implements Action {
    // Here's the type
    readonly type = TodoActionType.REMOVE_ITEM;

    // And here's the optional payload
    constructor(public payload: number) {}
}

export class UpdateItemAction implements Action {
    // Here's the type
    readonly type = TodoActionType.UPDATE_ITEM;

    // And here's the optional payload
    constructor(public payload: Todo, public newItem: Todo) {}
}

export type TodoAction = AddItemAction;
// something here
