import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Transporte Portillo';
  showHeader:boolean=false;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  myTheme:string ='ligth';

  constructor(private router: Router, private tokenStorageService:TokenStorageService, private translate:TranslateService){
    this.router.events.subscribe(event=>{
      if (event instanceof NavigationEnd) {
        this.showHeader=!['/login', '/register'].includes(event.url);
      }
    })
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

}
