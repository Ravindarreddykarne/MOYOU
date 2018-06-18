import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import {CookieService} from 'angular2-cookie/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class GuesthomeService {

  constructor(private httpClient : HttpClient) { }
  getData(){
    
    return this.httpClient.get('http://192.168.0.23:8085/api/v1/catalog').map((res: Response) => {
      console.log(res);
      return res;
    });
  }

}
