import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
/* import { Subscription } from 'rxjs/internal/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router'; */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // private subscription: Subscription;
  enSite = 'https://inibla.com/';
  amSite = 'http://localhost:4200/';

  constructor(
    /* private translate: TranslateService,
    private activatedRoute: ActivatedRoute */
  ) {
    /*
        translate.addLangs(['am', 'fr', 'ci', 'en']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/am|fr|ci|en/) ? browserLang : 'en');
        */
  }

  ngOnInit() {
    // subscribe to router event
    /* this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        const locale = param.locale;
        if (locale !== undefined) {
          this.translate.use(locale);
        }
      }); */

    // disable body scroll which navbar is in active
    $(() => {
      $('.navbar-toggler').on('click', () => {
        $('body').toggleClass('noscroll');
      });
    });

    // Main navigation Active Class Add Remove
    $('.navbar-toggler').on('click', () => {
      $('header').toggleClass('active');
    });

    $(document).on('ready', () => {
      if ($(window).width() > 991) {
        $('header').removeClass('active');
      }
      $(window).on('resize', () => {
        if ($(window).width() > 991) {
          $('header').removeClass('active');
        }
      });
    });

  }

  // tslint:disable-next-line: use-lifecycle-interface
  /*  ngOnDestroy() {
     // prevent memory leak by unsubscribing
     this.subscription.unsubscribe();
   } */

  // // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  /*  changeLanguage(lang: string) {
     this.translate.use(lang);
   } */ 

  toEnSite() {
    // window.open(this.enSite);
    //window.location.href = this.enSite;
  }

  toAmSite() {
    // window.open(this.amSite);
   // window.location.href = this.amSite;
    localStorage.setItem('amET', this.amSite);
  }
}
