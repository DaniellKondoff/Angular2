import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Observable, from} from 'rxjs'
import { tap } from 'rxjs/operators'
import { AuthService } from '../auth/service/auth-service.service';
import { Router } from '@angular/router';
const appKey = "kid_SyN1588jm";
const appSecret = "62ab2721457c4e5b8400b2046618062f";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(private authServce: AuthService, private router :Router){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(req.url.endsWith('login') || req.url.endsWith(appKey)){
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else{
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }
        return next.handle(req)
            .pipe(tap((event : HttpEvent<any>) => {
                if(event instanceof(HttpResponse) && req.url.endsWith('login')) {
                    this.successfulLogin(event.body)
                }
            },(err : any) => {
                if(err instanceof HttpErrorResponse){
                    switch(err.status) {
                        case 401:
                            this.router.navigate(['/login'])
                        break;
                        case 500:
                            this.router.navigate(['/login'])
                        break;
                    }
                }
            }))
    }

    private successfulLogin(data){
        this.authServce.auththoken = data['_kmd']['authtoken'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        this.router.navigate([''])
      }
}