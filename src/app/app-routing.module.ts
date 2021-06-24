import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path:'studentdetails', component: StudentdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
