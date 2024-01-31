import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver-admin',
  templateUrl: './driver-admin.component.html',
  styleUrls: ['./driver-admin.component.css']
})
export class DriverAdminComponent implements OnInit{
  constructor(private driverService:DriverService, private router:Router, private toast:ToastrService,private darkModeService:DarkModeService){
    this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
      this.isDarkThemeOn = isDarkThemeOn;
    });
  }
  isDarkThemeOn: boolean = false;
  drivers:any;
  driverid:any;
  searchTerm:any;
  searchResults:any;
  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((res)=>{
      console.log(res);
      this.drivers=res;
    })
  }

  editDriver(driverid:any){
    this.router.navigate(['/edit-driver',driverid])
  }
  deleteDriver(driverid:any){
    this.driverService.deleteDriver(driverid).subscribe(res=>{
      console.log(res);
    })
    this.toast.error('Driver deleted', 'Warning')
    this.router.navigate(['/driver-list']);
  }
  search(){
    console.log(this.searchTerm);
    this.driverService.searchDriver(this.searchTerm).subscribe((res)=>{
      console.log(res);
      this.searchResults=res;
    });
  }
}
