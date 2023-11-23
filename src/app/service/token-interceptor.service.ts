import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable(
  {providedIn: "root"}
)
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('JWT_TOKEN');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
