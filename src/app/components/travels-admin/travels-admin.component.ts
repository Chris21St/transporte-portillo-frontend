import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { DriverService } from 'src/app/services/driver.service';
import { TravelService } from 'src/app/services/travels.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-travels-admin',
  templateUrl: './travels-admin.component.html',
  styleUrls: ['./travels-admin.component.css']
})
export class TravelsAdminComponent {
  constructor(private userService:UserServiceService, private router:Router, private toast:ToastrService, private cdr:ChangeDetectorRef, private travelsService:TravelService,
    private darkModeService:DarkModeService, private driverService:DriverService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
    isDarkThemeOn: boolean = false;
    drivers:any;
  userid:any;
  searchResults:any;
  searchTerm='';
  travel:any;
    ngOnInit(): void {
      this.getTravels();
      this.driverService.getDrivers().subscribe((res)=>{
        console.log(res);
        this.drivers=res;
      })
    }
    getTravels(){
      this.travelsService.getTravels().subscribe((res)=>{
        console.log(res);
        this.travel=res;
        console.log(this.travel);
      })
    }
}
