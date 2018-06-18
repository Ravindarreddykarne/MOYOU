import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { WorkbenchComponent } from 'src/app/workbench/workbench.component';
import { UploadComponent } from 'src/app/upload/upload.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { GuestHomeComponent } from 'src/app/guest-home/guest-home.component';
import { CreateComponent } from 'src/app/create/create.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'guestuser',component:GuestHomeComponent},
  {path:'create',component:CreateComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
