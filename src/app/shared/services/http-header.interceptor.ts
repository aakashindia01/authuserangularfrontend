import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(private session: SessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.session.getSession('token');
    const cookie = this.session.getCookies('connect.sid');
    console.log('cookies', cookie)
    let modifiedRequest = request;

    if (token) {
      modifiedRequest = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'Cookies': cookie
        },
        withCredentials: true
      });
    }else{
      modifiedRequest = request.clone({
        withCredentials: true
      });
    }
    return next.handle(modifiedRequest);
  }
}
