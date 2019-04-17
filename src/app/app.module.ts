import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ConnectionService } from './_services/connection.service';
import { AuthenticationService } from './_auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxEditorModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InViewportModule, ScrollSpyModule.forRoot(),
    HttpClientModule,
    ScrollToModule.forRoot(),
    CKEditorModule,
    NgbModule
  ],
  providers: [
    ConnectionService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
