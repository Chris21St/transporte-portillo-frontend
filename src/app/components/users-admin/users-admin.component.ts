import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css'],
})
export class UsersAdminComponent implements OnInit {
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private toast: ToastrService,
    private cdr: ChangeDetectorRef,
    private darkModeService:DarkModeService,
  ) {
    this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
      this.isDarkThemeOn = isDarkThemeOn;
    });
  }
  isDarkThemeOn: boolean = false;
  res: any[]=[];
  users: any;
  userid: any;
  searchResults:any;
  searchTerm:any;
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
  editUser(userid: any) {
    this.router.navigate(['/edit-user', userid]);
    console.log(userid);
  }
  deleteUser(userid: any) {
    this.userService.deleteUser(userid).subscribe((res) => {
      console.log(res);
    });
    this.toast.error('User deleted', 'Warning');
    this.getUsers();
  }

  search() {
    console.log(this.searchTerm);
    this.userService.searchUser(this.searchTerm).subscribe((res)=>{
      console.log(res);
      this.searchResults=res;
    });
  }
}
