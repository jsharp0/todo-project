import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoService } from './services/todo.service';
import { AddItemAction } from './store/Actions/todo.action';
import { State } from './store/Models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TodoProject';
  lightMode = true;
  todoItems$: any;
  lightDesktopBground = 'assets/bgdesktoplight.jpg';
  lightMobileBground = 'assets/bg-mobile-light.jpg';
  lightMoonIcon = 'assets/icon-moon.svg';

  darkDesktopBground = 'assets/bg-desktop-dark.jpg';
  darkMobileBground = 'assets/bg-mobile-dark.jpg';
  darkSunIcon = 'assets/icon-sun.svg';

  constructor(private renderer: Renderer2, private todoService: TodoService,
              private store: Store<State>) {}

  ngOnInit(): void {
    const currentState = JSON.parse(this.todoService.getState());

    if (currentState.length > 0) {
      currentState.forEach(todo => {
        this.store.dispatch(new AddItemAction(todo));
      });
    }
    this.store.select(todos => todos).subscribe(todo => {
      this.todoService.saveCurrentState(todo.todo);
    });
  }

  toggleLightMode(): void {
    this.lightMode = !this.lightMode;

    if (!this.lightMode) {
      this.renderer.addClass(document.body, 'dark-page');
      this.renderer.removeClass(document.body, 'light-page');
    } else {
      this.renderer.addClass(document.body, 'light-page');
      this.renderer.removeClass(document.body, 'dark-page');
    }
  }
}
