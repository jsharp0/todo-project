import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './store/Models/todo.model';
import { Store } from '@ngrx/store';
import { State } from './store/Models/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoProject';
  lightMode = true;
  todoItems$: any;
  lightDesktopBground = 'assets/bgdesktoplight.jpg';
  lightMobileBground = 'assets/bg-mobile-light.jpg';
  lightMoonIcon = 'assets/icon-moon.svg';

  darkDesktopBground = 'assets/bg-desktop-dark.jpg';
  darkMobileBground = 'assets/bg-mobile-dark.jpg';
  darkSunIcon = 'assets/icon-sun.svg';

  constructor(private store: Store<State>) {}

  toggleLightMode(): void {
    this.lightMode = !this.lightMode;

    this.store.select(res => res).subscribe(res => {
      console.log(res);
    })
  }
}
