import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute,
    private userService:UserServiceService, private darkModeService:DarkModeService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
    isDarkThemeOn: boolean = false;
  userid:any;
  user:any;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userid=params['id'];
      console.log(this.userid);
    })
    this.getUser();
  }
  getUser(){
    this.userService.getUserById(this.userid).subscribe(res=>{
      console.log('log getuser'+JSON.stringify(res));
      this.user=res;
    });
  }

}
