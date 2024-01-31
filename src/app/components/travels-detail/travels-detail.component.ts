import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { DriverService } from 'src/app/services/driver.service';
import { TravelService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-travels-detail',
  templateUrl: './travels-detail.component.html',
  styleUrls: ['./travels-detail.component.css']
})
export class TravelsDetailComponent {
  constructor(private route:ActivatedRoute,
    private travelService:TravelService, private driverService:DriverService,private darkModeService:DarkModeService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
    isDarkThemeOn: boolean = false;
  travelid:any;
  travel:any;
  driver:any;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.travelid=params['id'];
      console.log(this.travelid);
    })
    this.getTravel();
    //this.getDriver();
  }
  getTravel(){
    this.travelService.getTravelById(this.travelid).pipe(
      switchMap((travelRes: any) => {
        console.log('log de travel' + JSON.stringify(travelRes));
        this.travel = travelRes;
        this.driver = travelRes['driver'];
        console.log(this.driver);
        return this.driverService.getDriverById(this.driver);
      })
    ).subscribe(driverRes => {
      console.log('log driver' + JSON.stringify(driverRes));
      this.driver = driverRes;
    });
  }
  /* getDriver(){
    this.driverService.getDriverById(this.driver).subscribe(res=>{
      console.log('log driver'+JSON.stringify(res));
      this.driver=res;
    });
  } */
}
