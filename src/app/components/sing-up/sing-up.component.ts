import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  ngOnInit(): void {
    //this.createForm();
  }
  //registerForm: Form;

  constructor( private formBuilder: FormBuilder){}

  /* createForm(){
    this.registerForm = this.formBuilder.group({
      names:['',[Validators.required]],
      last_names:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      phone:['',[Validators.required]],
    },
    //{ validators: this.checkPasswords('password','confirmPassword')}
    );
  } */
}
