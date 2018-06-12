import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { WorkbenchComponent } from 'src/app/workbench/workbench.component';
import { UploadComponent } from 'src/app/upload/upload.component';

const routes: Routes = [

  {path:'navbar',component:NavbarComponent},
 
  {path:'home',
  component:HomeComponent,
  children: [
  
     
    {path:'home/upload',component:UploadComponent},
  {path:'home/workbench',component:WorkbenchComponent},
]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
