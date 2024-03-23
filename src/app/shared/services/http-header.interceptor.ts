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
    const token = this.session.getSesssion('token')
    const modifiedRequest = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true
    })
    return next.handle(modifiedRequest);
  }
}
