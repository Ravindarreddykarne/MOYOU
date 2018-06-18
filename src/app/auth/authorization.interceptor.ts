import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class  AuthorizationInterceptor implements HttpInterceptor {
    loginData: any = {};
    constructor(private cookieService: CookieService) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loginData = this.cookieService.getObject('logindata');
        request = request.clone({
            setHeaders: {
              Authorization:'TOKEN'+" "+ this.loginData.data.token,
              CALLER:"USER"
            }
          });
          return next.handle(request);
    }

}
