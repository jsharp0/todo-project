import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/store/Models/state.model';
import { Store } from '@ngrx/store';
import { AddItemAction } from 'src/app/store/Actions/todo.action';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss']
})
export class InputTodoComponent implements OnInit {
  checked;
  newTodo: string;
  @Input() lightMode = true;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  checkboxToggle(): void {
    this.checked = !this.checked;
  }

  saveTodo(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.store.dispatch(new AddItemAction({completed: false, text: this.newTodo}));
      this.newTodo = '';
    }
  }

}
