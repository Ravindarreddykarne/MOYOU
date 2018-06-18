import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  urlValues: any;
  loginData: any;
  loginStatus: boolean;
  constructor(private cookieService: CookieService, private router: Router,
    private signinService: LoginService) { }

  ngOnInit() {
    this.loginData = this.cookieService.getObject('logindata');
    this.loadHeaderChanges();
  }
  loadHeaderChanges() {
    if(this.loginData){
      this.loginStatus = true;
      this.urlValues =
     [
      {
        'urlLink': '/profile',
        'urlName': 'PROFILE'
    }
    ]; 
     
    }else{
      this.loginStatus = false;
      this.urlValues = 
      [
       
       
        {
          'urlLink': '/home',
          'urlName': 'HOME'
        },
        {
          'urlLink': '/Features',
          'urlName': 'FEATURES'
        },
        {
          'urlLink': '/about',
          'urlName': 'ABOUT'
        },
        {
          'urlLink': '/login',
          'urlName': 'LOGIN',
        },
     ];
    }
       
    } 
    // if (this.loginData.status=200)  {
    //   this.urlValues = [
    //       {
    //           'urlLink': '/logout',
    //           'urlName': 'LOGOUT'
    //       },
    //       {
    //           'urlLink': '/profile',
    //           'urlName': 'PROFILE'
    //       }
    //    ];
    // }


    logout() {
      this.signinService.logout();
      this.loadHeaderChanges();
      window.location.reload();
      this.router.navigate(['home']);
    }
  }


