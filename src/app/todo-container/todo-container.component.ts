import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Todo } from '../store/Models/todo.model';
import { State } from '../store/Models/state.model';
import { Store } from '@ngrx/store';
import { RemoveItemAction } from '../store/Actions/todo.action';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContainerComponent implements OnInit {
  todoList: Todo[] = [
    {completed: false, text: 'Testing'}
  ];

  filteredTodoList: Todo[] = [];

  currentFilter: string = null;

  constructor(private store: Store<State>, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(todos => todos).subscribe(todoList => {
      this.todoList = todoList.todo;
      this.filteredTodoList = this.todoList;
      this._cdr.detectChanges();
    });
  }

  filterItems(filter?: string): void {
    this.currentFilter = filter;
    switch (filter) {
    case 'completed':
        this.filteredTodoList = this.todoList.filter(todo => todo.completed);
        break;
    case 'active':
        this.filteredTodoList = this.todoList.filter(todo => !todo.completed);
        break;
      default:
        this.filteredTodoList  = this.todoList;
        break;
    }
  }

  clearCompleted(): void {
    const todosToDelete = this.todoList.filter(todo => todo.completed);
    console.log('to delete')
    console.log(todosToDelete);
    todosToDelete.forEach(todo => {
      const index = this.todoList.findIndex(selectTodo => selectTodo === todo);
      this.store.dispatch(new RemoveItemAction(index));
    });
  }

}
