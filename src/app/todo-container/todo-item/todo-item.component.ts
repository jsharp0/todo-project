import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateItemAction } from 'src/app/store/Actions/todo.action';
import { State } from 'src/app/store/Models/state.model';
import { Todo } from '../../store/Models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() lightMode = true;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  updateTodo(completed: boolean): void {
    this.store.dispatch(new UpdateItemAction(this.todo, {text: this.todo.text, completed}));
  }

}
