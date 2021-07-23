import { Component, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2) {}

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
