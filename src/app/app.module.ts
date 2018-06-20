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
import { CreateComponent } from 'src/app/create/create.component';

import {HttpClientModule} from '@angular/common/http';
import { AuthorizationInterceptor } from './auth/authorization.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    GuestHomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YoutubePlayerModule,
    Ng2SearchPipeModule
    

  ],
  providers: [CookieService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
