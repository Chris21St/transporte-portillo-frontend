import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
constructor(private userService:UserServiceService, private router:Router, private toast:ToastrService, private cdr:ChangeDetectorRef,
  private darkModeService:DarkModeService){
    this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
      this.isDarkThemeOn = isDarkThemeOn;
    });
  }
  isDarkThemeOn: boolean = false;
users:any;
userid:any;
searchResults:any;
searchTerm='';
//isDarkThemeOn=new BehaviorSubject<boolean>(false);
//isDarkThemeOn = true;

/* toggleDarkMode(): void{

  document.body.classList.toggle('dark-theme');
  this.isDarkThemeOn.next(!this.isDarkThemeOn.value);
} */
/* setThemeClass() {
  const themeClass = this.isDarkThemeOn ? 'dark-theme' : 'light-theme';
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(themeClass);
} */
/* toggleDarkMode(): void {
  this.isDarkThemeOn = !this.isDarkThemeOn;
  document.body.classList.toggle('dark-theme', this.isDarkThemeOn);
  document.body.classList.toggle('light-theme', !this.isDarkThemeOn);

  this.setThemeClass(); // Llama a la función para cambiar la clase en los componentes
} */

  ngOnInit(): void {
    this.getUsers();
    //this.setThemeClass();
    //this.toggleDarkMode();
  }

  getUsers(){
    this.userService.getUsers().subscribe((res)=>{
      console.log(res);
      this.users=res;
    })
  }
  editUser(userid:any){
    this.router.navigate(['/edit-user',userid])
    console.log(userid);
  }
  deleteUser(userid:any){
  this.userService.deleteUser(userid).subscribe(res=>{
    console.log(res);
  })
  this.toast.error('User deleted', 'Warning');
  this.getUsers();
  }

  search(){
    console.log(this.searchTerm);
    this.userService.searchUser(this.searchTerm).subscribe((res)=>{
      console.log(res);
      this.searchResults=res;
    });
  }
}
