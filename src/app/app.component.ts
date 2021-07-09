import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoProject';
  lightMode = true;

  lightDesktopBground = 'assets/bgdesktoplight.jpg';
  lightMobileBground = 'assets/bg-mobile-light.jpg';
  lightMoonIcon = 'assets/icon-moon.svg';

  darkDesktopBground = 'assets/bg-desktop-dark.jpg';
  darkMobileBground = 'assets/bg-mobile-dark.jpg';
  darkSunIcon = 'assets/icon-sun.svg';

  toggleLightMode(): void {
    this.lightMode = !this.lightMode;
  }
}
