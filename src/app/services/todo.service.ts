import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/Models/state.model';
import { Todo } from '../store/Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  saveCurrentState(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getState(): string {
    return localStorage.getItem('todos');
  }
}
