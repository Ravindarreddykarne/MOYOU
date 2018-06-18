import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormsModule, ReactiveFormsModule , FormGroup ,NgForm} from '@angular/forms';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginresponse: any = {};
  id: any;
  constructor(private signinService: LoginService,private router: Router, private cookieService: CookieService  ) { }

  ngOnInit() {
  }
  signin(loginForm: NgForm): void {
    console.log(this.user);
    this.signinService.Login(this.user).then( (data: any) => {
      console.log(data);
      this.loginresponse = data;
      if (data.status === 200) {
        this.router.navigate(['guestuser']);
        this.cookieService.putObject('logindata', this.loginresponse);
        console.log(this.cookieService.getObject('logindata'))
      }
    });
  }

}
