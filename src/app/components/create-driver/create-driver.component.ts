import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  payWeekly:boolean=false;
  driverid:any;
  driver:any={};
  isDarkThemeOn: boolean = false;

  constructor(private driverService:DriverService,private route:ActivatedRoute,private toast:ToastrService, private router:Router,
    private darkModeService:DarkModeService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.driverid=params['id'];
      if (this.driverid) {
        this.driverService.getDriverById(this.driverid).subscribe(res=>{
          this.driver=res;
          console.log(res);
        })
      }
    })
  }
  driverForm=new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    payWeekly: new FormControl(false),
  });

  saveDriver(){
    if (this.driverid) {
      this.driverService.editDriver(this.driverid,this.driverForm.value).subscribe(res=>{
        console.log(res);
      })
      this.toast.success('Driver updated','Success')
      this.router.navigate(['/driver-list'])
    }else{
      if (this.driverForm.valid) {
        console.log('Datos guardados', this.driverForm.value);
        const datos=this.driverForm.value;
        this.driverService.createDriver(datos).subscribe((res)=>{
          console.log('guardado'+res);
        });
        this.toast.success('Driver created','Success')
        this.router.navigate(['/driver-list'])
      }
      else{
        alert('Complete los campos');
      }
    }
  }
}
