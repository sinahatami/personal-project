import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../_auth/auth.guard';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

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
    username : new FormControl('', [
      Validators.required
    ]),
    password : new FormControl('', [
      Validators.required
    ])
  });

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  
  invalidLogin = false;
  onSubmit() {
    this.auth.login(this.loginForm.value)
    .subscribe(result => {
      if(result) {
        this.router.navigate(['/blog'])
      }
      else {
        this.invalidLogin = true
      }
    })
  }
}