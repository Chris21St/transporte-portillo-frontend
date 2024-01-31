import { Component, signal } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
constructor(private darkmode: DarkModeService){}
isDarkThemeOn=signal(false);

toggleDarkMode(): void{

  document.body.classList.toggle('dark-theme');
  this.isDarkThemeOn.update((isDarkThemeOn)=>!isDarkThemeOn);
}
}
