import { Todo } from './todo.model';

export interface State {
    readonly todo: Array<Todo>;
}
