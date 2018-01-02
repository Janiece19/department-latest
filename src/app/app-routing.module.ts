import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  //  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/home', component: CardComponent },
  // { path: 'login/login', component: LoginComponent },
  // { path: 'edit/:id', component: EditDeptComponent },
  // { path: 'view-detail', component: DepartmentDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
   
    RouterModule.forRoot(routes,
      { enableTracing: true })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
