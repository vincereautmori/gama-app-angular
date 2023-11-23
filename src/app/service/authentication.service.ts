import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, mapTo, tap} from 'rxjs/operators';
import {Cop} from "../entities/model/cop.model";
import {Router} from "@angular/router";
import {constants} from "../../constants";

interface User {
  username: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USER_KEY = 'USER_KEY';
  private loggedUser?: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(cop: Cop): Observable<boolean> {
    return this.http.post<any>('\n' +
      constants.API_URL_PREFFIX + '/auth/token', cop)
      .pipe(
        tap(response => {
          if (!response.token) {
            throw new Error('Token de autenticação não encontrado');
          }
          this.doLoginUser(cop.username, response.token)
        }),
        mapTo(true),
        catchError(error => {
          console.log(error);
          throw new Error('Token de autenticação não encontrado');
          return of(false);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.USER_KEY);
    this.loggedUser = null;

    this.router.navigate(['/login']);

  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  getJwtToken(): string {
    // @ts-ignore
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username?: string, token?: string): void {
    this.loggedUser = username;
    localStorage.setItem(this.USER_KEY, username || ``);
    localStorage.setItem(this.JWT_TOKEN, token || ``);
  }
}
