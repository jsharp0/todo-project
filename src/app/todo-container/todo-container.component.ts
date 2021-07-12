import { Component, OnInit } from '@angular/core';
import { Todo } from '../store/Models/todo.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {
  todoList: Todo[] = [
    {completed: false, text: 'Testing'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
