import { Action } from '@ngrx/store';
import { Todo } from '../Models/todo.model';

// Every NgRx Action has two main properties: type and optional payload
export enum TodoActionType {
    ADD_ITEM = '[TODO] Add Todo',
}
export class AddItemAction implements Action {
    // Here's the type
    readonly type = TodoActionType.ADD_ITEM;

    // And here's the optional payload
    constructor(public payload: Todo) {}
}

export type TodoAction = AddItemAction;
