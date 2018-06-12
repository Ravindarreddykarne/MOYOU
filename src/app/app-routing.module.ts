import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { WorkbenchComponent } from 'src/app/workbench/workbench.component';
import { UploadComponent } from 'src/app/upload/upload.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { GuestHomeComponent } from 'src/app/guest-home/guest-home.component';

const routes: Routes = [

  {path:'navbar',component:HeaderComponent},
  {path:'home',component:HomeComponent,
  children: [
  {path:'home/upload',component:UploadComponent},
  {path:'home/workbench',component:WorkbenchComponent},
  
]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'guestuser',component:GuestHomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
