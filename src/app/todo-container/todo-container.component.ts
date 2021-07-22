import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Todo } from '../store/Models/todo.model';
import { State } from '../store/Models/state.model';
import { Store } from '@ngrx/store';

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

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(todos => todos).subscribe(todoList => {
      this.todoList = todoList.todo;
    });

    this.filteredTodoList = this.todoList;
  }

  filterItems(filter?: string): void {
    this.currentFilter = filter;
    console.log(this.currentFilter);
    switch (filter) {
    case 'completed':
        this.filteredTodoList = this.todoList.filter(todo => todo.completed);
        // this.currentFilter = 'completed'
        break;
    case 'active':
        this.filteredTodoList = this.todoList.filter(todo => !todo.completed);
        // this.currentFilter = 'active';
        break;
      default:
        this.filteredTodoList  = this.todoList;
        // this.currentFilter = null;
        break;
    }
    console.log(this.filteredTodoList);
  }

}
