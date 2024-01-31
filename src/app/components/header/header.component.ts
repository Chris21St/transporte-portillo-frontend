import { Component, ElementRef, Renderer2, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //isDarkmode:boolean;
  MobileActive=false;

  constructor(private tokenStorageService:TokenStorageService, private el:ElementRef, private renderer:Renderer2, private translate:TranslateService,
    private darkModeService:DarkModeService){}

  useLanguage(language: string): void {
    this.translate.use(language);
}

  toggleMobileMenu(){
    console.log('Click');
    this.MobileActive=!this.MobileActive;
    /* const navList=this.el.nativeElement.querySelector('.nav');

    if (this.MobileActive) {
      this.renderer.addClass(navList, 'show');
    } else {
      this.renderer.removeClass(navList, 'show');
    } */
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  isDarkThemeOn=signal(false);
  toggleDarkMode(): void{
    this.darkModeService.toggleDarkMode();
    document.body.classList.toggle('dark-theme');
    this.isDarkThemeOn.update((isDarkThemeOn)=>!isDarkThemeOn);
    //this.darkmode.toggleDarkMode();
  }
/*   public isLightTheme = true;

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  } */
}
