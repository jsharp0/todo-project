import { Todo } from './todo.model';

export interface State {
    readonly todos: Array<Todo>;
}
