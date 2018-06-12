import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormsModule, ReactiveFormsModule , FormGroup ,NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginresponse: any = {};
  id: any;
  constructor(private signinService: LoginService) { }

  ngOnInit() {
  }
  // signin(loginForm: NgForm): void {
  //   console.log(this.user);
  //   this.signinService.Login(this.user).then( (data: any) => {
  //     console.log(data);
  //     this.loginresponse = data;
  //   });
  // }
}
