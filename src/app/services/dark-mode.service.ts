import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  constructor() { }

  private isDarkThemeOn = new BehaviorSubject<boolean>(false);
  isDarkThemeOn$ = this.isDarkThemeOn.asObservable();

  toggleDarkMode(): void {
    this.isDarkThemeOn.next(!this.isDarkThemeOn.value);
  }

  /* private isDarkMode=false;
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkModeClass();
  }
  private updateDarkModeClass(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  isDarkModeEnabled(): boolean {
    return this.isDarkMode;
  } */
}
