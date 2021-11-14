import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // read the token from localStorage
    const token=localStorage.getItem('token');
    // decode the token
    const userDetails:any = localStorage.getItem('userDetails'); 
   
    // check the expiry of the token
    const exp=JSON.parse(userDetails || '').exp
    console.log(JSON.parse(userDetails || '').exp);
    // if it not expired then allowed
    if(Date.now() > exp/1000){
      console.log("token is valid");
      request=request.clone({
        headers:request.headers.set('authorization',token || ''),
      })
    }
    else{
      this.router.navigate(['/users/login']);
    }
    // if the token is expired then go back to the login and get the token
    return next.handle(request);
  }
}
