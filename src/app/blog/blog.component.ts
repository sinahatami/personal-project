import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../_auth/auth.guard';
import { NgxEditorModule } from 'ngx-editor';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public auth: AuthenticationService, private http: HttpClient,private router: Router) {
    
  }
  
  public Array = []
  public ArrayPages = []

  public patternUrl = 'https://wwwresume.herokuapp.com/blog/'
  public isDisabled: boolean
  ngOnInit(){
    this.http.get(this.patternUrl)
      .subscribe(res => {
        this.Array = res['results']


        let Count = res['count']
        let showNum = Count/5
        for(var eachNumPage = 2; eachNumPage <= showNum; eachNumPage++) {
          this.ArrayPages.push(eachNumPage)
        }
        
        this.Editor.isEnabled = false
        
      })
  }

  firstPage() {
    this.http.get(this.patternUrl)
    .subscribe(res => {
      this.Array = res['results']
    })  
  }

  goPage(page){
    this.http.get(this.patternUrl + '?page=' + page)
    .subscribe(res => {
      this.Array = res['results']
    })
  }
  
  
  public Editor = ClassicEditor;
  

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
  }


  
}
