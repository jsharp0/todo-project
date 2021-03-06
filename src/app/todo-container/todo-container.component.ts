import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Todo } from '../store/Models/todo.model';
import { State } from '../store/Models/state.model';
import { Store } from '@ngrx/store';
import { MoveItemAction, RemoveItemAction } from '../store/Actions/todo.action';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

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

  @Input() lightMode = true;

  constructor(private store: Store<State>, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(todos => todos).subscribe(todoList => {
      this.todoList = todoList.todo;
      this.filteredTodoList = this.todoList;
      this.filterItems(this.currentFilter);
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
    todosToDelete.forEach(todo => {
      const index = this.todoList.findIndex(selectTodo => selectTodo === todo);
      this.store.dispatch(new RemoveItemAction(index));
    });
  }

  moveItem(event: CdkDragDrop<Todo[]>): void {
    this.store.dispatch(new MoveItemAction(event.previousIndex, event.currentIndex));
  }

}
