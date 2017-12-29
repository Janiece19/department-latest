import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { DepartmentListingComponent } from './department-listing/department-listing.component';
import { FormService } from "./shared/form-service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddFormComponent } from './add-form/add-form.component';
import { MatDialog, MatDialogModule } from "@angular/material";
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    DepartmentListingComponent,
    AddFormComponent,
    DeleteComponent,
    LoginComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
   entryComponents:[AddFormComponent,DeleteComponent],
  providers: [FormService,MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
