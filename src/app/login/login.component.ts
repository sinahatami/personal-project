import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../_auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private router:Router) { }

  loginForm = new FormGroup({
    loginFormUsername : new FormControl('', [
      Validators.required
    ]),
    loginFormPassword : new FormControl('', [
      Validators.required
    ])
  });

  get loginFormUserName() {
    return this.loginForm.get('loginFormUsername')
  }
  get loginFormPassword() {
    return this.loginForm.get('loginFormPassword')
  }

  credentials:any
  invalidLogin: boolean;
  onSubmit(credentials) {
    this.auth.login(credentials)
    .subscribe(result => {
      if(result) {
        this.router.navigate(['/blog']);
        alert('You are admin now!!!');
      }  
      else 
        this.invalidLogin = true
    })
  }
}