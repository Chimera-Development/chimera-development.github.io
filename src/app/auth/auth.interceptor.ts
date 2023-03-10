import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {exhaustMap, Observable, take} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   return this.authService.userSet.pipe(
      take(1),
      exhaustMap( (user) => {
        if(!user) return next.handle(request)


        const modifiedRequest = request.clone({
          params: new HttpParams().set('auth', user!.token!)
        })
        return next.handle(modifiedRequest);
      })
    )
  }
}
