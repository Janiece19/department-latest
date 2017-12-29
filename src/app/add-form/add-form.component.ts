import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validator } from '../validator';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

 isLinear = false;
  constructor(public dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder) { }

  ngOnInit() {
    this.form();
  }

  userForm:FormGroup;

  form(){
    this.userForm=this.fb.group({
      name:['',[Validators.required,Validator(/^[a-zA-Z0-9\s]+$/)]],
      firstCtrl:['',Validators.required],
      secondCtrl:['',Validators.required],

    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
onSubmit(){

}

  
}
