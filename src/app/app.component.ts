import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validator, maxLength1 } from './validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hide=true;
  username='dell';
  password='Aa1&qwert';
  flag:boolean=true;

  ngOnInit(): void {
    this.form();
  }
constructor(private fb:FormBuilder,private router:Router){}

  loginForm:FormGroup;

  form(){
    this.loginForm=this.fb.group({
      username:['',[Validators.required,Validator(/^[a-zA-Z0-9\s]+$/)]],
      passwrd: ['', [Validators.required, Validator(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,9})/),maxLength1()]]
      // firstCtrl:['',Validators.required],
      // secondCtrl:['',Validators.required],

    })
  }

  onSubmit(values)
  {
 if (values.username==this.username && values.passwrd==this.password)
 {
 this.flag=true;
 this.router.navigate(['/login']);
 }
 else
 this.flag=false;
  }
}
