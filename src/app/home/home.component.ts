import { DOCUMENT } from '@angular/platform-browser';
import { Component ,Inject, HostListener, Renderer2, OnInit} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SpaceValidators } from '../validators';
import { ConnectionService } from '../_services/connection.service';

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
  constructor(private _renderer2: Renderer2, private http: HttpClient, @Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private connectionService: ConnectionService) {

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
    contactFormName : new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(4),
      SpaceValidators.cannotContainSpace
    ]),

    contactFormEmail : new FormControl('', [
      Validators.compose([Validators.required, Validators.email]),
    ]),

    contactFormTel : new FormControl('', [
      Validators.required,
      SpaceValidators.cannotContainSpace,
    ]),

    contactFormComment : new FormControl('', [
      Validators.required,
    ])
  });
  get contactFormName(){
    return this.contactForm.get('contactFormName');
  }

  get contactFormEmail() {
    return this.contactForm.get('contactFormEmail');
  }

  get contactFormTel() {
    return this.contactForm.get('contactFormTel');
  }

  get contactFormComment() {
    return this.contactForm.get('contactFormComment');
  }
  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }
  

  
  public ngOnInit(){
    
  }
}
