import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userid:any;
  isDarkThemeOn: boolean = false;
  constructor(private userService:UserServiceService, private route:ActivatedRoute,private toast:ToastrService, private router:Router,
    private darkModeService:DarkModeService){
      this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
        this.isDarkThemeOn = isDarkThemeOn;
      });
    }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.userid=params['id'];
      if (this.userid) {
        this.userService.getUserById(this.userid).subscribe(res=>{
          this.user=res;
          console.log(res);

        })
      }
    })
  }
  user:any={};
  userForm=new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })
  saveUser(){
    if (this.userid) {
      this.userService.editUser(this.userid,this.userForm.value).subscribe(res=>{
        console.log('Usuario Actualizado');
        console.log(res);
      })
      this.toast.success('Updated User','Success')
      this.router.navigate(['/'])
    }else{
      if (this.userForm.valid) {
        console.log('Datos guardados', this.userForm.value);
        const datos=this.userForm.value;
        this.userService.createUser(datos).subscribe((res)=>{
          console.log('guardado'+res);
        });
        this.toast.success('User created','Success')
        this.router.navigate(['/'])
      }
      else{
        alert('Complete los campos');
      }
    }
  }
}
