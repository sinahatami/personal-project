import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }    
  login(credentials) {
      return this.http.post<any>(`{config.apiUrl}/users/authenticate`,credentials)
          .pipe(map(user => {
              if (user && user.token) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }    
              return user;
          }));
  }    
  logout() {
      localStorage.removeItem('currentUser');
  }
  isLoggedin: boolean = false;
  isLoggedIn() {
    if (JSON.parse(localStorage.getItem('currentUser')).auth_token == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }
}