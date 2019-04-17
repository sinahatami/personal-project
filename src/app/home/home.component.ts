import { DOCUMENT } from '@angular/platform-browser';
import { Component ,Inject, HostListener, Renderer2, OnInit} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from '../_services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [
    trigger('navbar', [
      transition(':enter', [
        animate('0.5s cubic-bezier(.21,.56,.29,.15)',style({transform:'translateY(200px)', opacity: 0}))  
      ])
    ])
  ]
})

export class HomeComponent {

  windowScrolled: boolean;
  constructor(private _renderer2: Renderer2, private http: HttpClient, @Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private connectionService: ConnectionService, private router: Router) {

  }

  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
    }
    scroll() {
      (function smoothscroll() {
          var currentScroll = document.getElementById
          if (currentScroll) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo()
          }
      })();
    }
  contactForm = new FormGroup({
    name : new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(4)
    ]),

    email : new FormControl('', [
      Validators.compose([Validators.required, Validators.email]),
    ]),

    tell : new FormControl('', [
      Validators.required
    ]),

    comment : new FormControl('', [
      Validators.required,
    ])
  });
  get name(){
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get tell() {
    return this.contactForm.get('tell');
  }

  get comment() {
    return this.contactForm.get('comment');
  }
  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    },
    );
  }

  public ngOnInit(){
    
  }
}
