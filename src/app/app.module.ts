import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GuestHeaderComponent } from './guest-header/guest-header.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkbenchComponent,
    UploadComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GuestHeaderComponent,
    GuestHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
