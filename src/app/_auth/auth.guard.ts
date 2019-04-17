import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  constructor(private http: HttpClient) { }    
  login(credentials) {
      return this.http.post<any>(`https://wwwresume.herokuapp.com/api-token-auth/`,credentials)
          .pipe(map(response => {
            let result = response
              if (result && result.token) {
                localStorage.setItem('currentUser', JSON.stringify(result));
                return true
              }    
              return false;
          }));
  }    


  logout() {
    localStorage.removeItem('currentUser');
  }
  
  isLoggedIn() {
    if(localStorage.length >0 ){
      return true
    }
    else {
      return false
    }  
  }
}