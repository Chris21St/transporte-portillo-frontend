import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { TravelService } from 'src/app/services/travels.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent {
  constructor(private userService:UserServiceService, private router:Router, private toast:ToastrService, private cdr:ChangeDetectorRef, private travelsService:TravelService,
    private darkModeService:DarkModeService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
    isDarkThemeOn: boolean = false;
  userid:any;
  searchResults:any;
  searchTerm='';
  travel:any;
    ngOnInit(): void {
      this.getTravels();
    }
    getTravels(){
      this.travelsService.getTravels().subscribe((res)=>{
        console.log(res);
        this.travel=res;
        console.log(this.travel);
      })
    }
}
