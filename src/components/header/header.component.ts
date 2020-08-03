import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import * as $ from 'jquery';
import { APP_BASE_HREF, Location } from '@angular/common';
/* import { Subscription } from 'rxjs/internal/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router'; */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  languages = [
    { code: 'am', label: 'Amharic' },
    { code: 'en', label: 'English' },
  ];

  // private subscription: Subscription;

  constructor(
    /* private translate: TranslateService,
    private activatedRoute: ActivatedRoute */
    @Inject(LOCALE_ID) public localeId: string,
    @Inject(APP_BASE_HREF) public baseHref: string,
    public location: Location
  ) {
    /*
        translate.addLangs(['am', 'fr', 'ci', 'en']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/am|fr|ci|en/) ? browserLang : 'en');
        */
    console.log('localeID', localeId);
    console.log('baseHref', baseHref);
    console.log('location', location);
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

  public languageChanged(event: any) {
    const value = event.target.value;
    // this.language = value;
    console.log(value);
  }

}
