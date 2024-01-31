import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent {

  constructor(private route:ActivatedRoute,
    private driverService:DriverService,private darkModeService:DarkModeService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
    isDarkThemeOn: boolean = false;
  driverid:any;
  driver:any;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.driverid=params['id'];
      console.log(this.driverid);
    })
    this.getDriver();
  }
  getDriver(){
    this.driverService.getDriverById(this.driverid).subscribe(res=>{
      console.log('log driver'+JSON.stringify(res));
      this.driver=res;
    });
  }
}
