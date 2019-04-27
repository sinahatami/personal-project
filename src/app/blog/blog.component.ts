import { HttpClient } from '@angular/common/http';
import { NgxEditorModule } from 'ngx-editor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private http: HttpClient) {
    
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
  
  
}
