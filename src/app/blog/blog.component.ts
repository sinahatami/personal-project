import { AuthenticationService } from './../_auth/auth.guard';
import { NgxEditorModule } from 'ngx-editor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  constructor(auth: AuthenticationService) {
    let x = auth.isLoggedIn
  }
  x
  
}
