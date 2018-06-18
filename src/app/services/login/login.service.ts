import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/apiUrl';
import { Router, CanActivate } from '@angular/router';
import axios from 'axios';
import {CookieService} from 'angular2-cookie/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private cookieService: CookieService ) { }
  Login(user) {
    console.log(user);
    const usercredentials = btoa(user.username + ':' + user.password);
    console.log(usercredentials);

    return new Promise(function(resolve, reject) {
     axios({
                url: AppSettings.HOST_URL + 'api/v1/users/login',
                method: 'POST',
               // data: user,
                headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            'Authorization': 'Basic ' + usercredentials,
                            'CALLER':'USER'
                            }

                }).then(function(res) {
                    console.log(res);
                    resolve(res);
                })
                 .catch(function (err) {
                    reject(err);
                });
   });
}

  isAuthenticated(): boolean {
    if (this.cookieService.getObject('token')) {
      return true;
    } else {
      return false;
    }
  }
  canActivate() {
    // if (localStorage.getItem('token')) {
    if (this.isAuthenticated()) {
      return true;
    } else {
      // this.router.navigate(['login']);
    }
  }
  getLoginData() {
    return this.cookieService.getObject('loginResponce');
  }
logout(): void {
  // localStorage.removeItem('token');
  this.cookieService.remove('token');
  this.cookieService.removeAll();
}
}
