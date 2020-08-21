import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import * as $ from 'jquery';
import { timers } from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  // TODO: specify an interface type for languages
  languages = [
    { code: 'am', label: 'Amharic' },
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'French' },
  ];

  storedlocale: string;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    @Inject(APP_BASE_HREF) public baseHref: string,
    public location: PlatformLocation
  ) {
    this.storedlocale = localStorage.getItem('locale');
  }

  cacheLocalePreference(locale: string) {
    localStorage.setItem('locale', locale);
  }


  ngOnInit() {
    // stored locale exists
    console.log(this.storedlocale, this.localeId);
    if (this.storedlocale && this.storedlocale !== this.localeId) {
      console.log('redirecting');
      
      let langExist = false;
      // for (let index = 0; index < this.languages.length; index++) {
      //   const element = this.languages[index];

        // navigating from existing locale e.g. /am/ or /inibla/am/
        if(this.baseHref.indexOf(`/${this.localeId}/`) !== -1) {
          this.baseHref = this.baseHref.replace(this.localeId, this.storedlocale);
          langExist = true;
          // break;
        }
      // }

      // navigating from root baseHref e.g / or /inibla/
      if(!langExist) {
        this.baseHref = `${this.baseHref}${this.storedlocale}/`
      }
      
      let port = this.location.port.length > 0 ? `:${this.location.port}` : '';
      let url = `${this.location.protocol}//${this.location.hostname}${port}${this.baseHref}`;
      console.log('ngInit', url, this.storedlocale, this.location);
      window.location.href = url;
    }

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

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  gotoLocale(lang: any): void {
    // TODO: close any dialog window

    
    // redirect if selected lang is different from current locale
    if (lang.code !== this.localeId) {
      this.topFunction();
      this.cacheLocalePreference(lang.code);

      let langExist = false;
      // for (let index = 0; index < this.languages.length; index++) {
      //   const element = this.languages[index];

        // navigating from existing locale e.g. /am/ or /inibla/am/
        if(this.baseHref.indexOf(`/${this.localeId}/`) !== -1) {
          this.baseHref = this.baseHref.replace(this.localeId, lang.code);
          langExist = true;
          // break;
        }
      // }

      // navigating from root baseHref e.g / or /inibla/
      if(!langExist) {
        this.baseHref = `${this.baseHref}${lang.code}/`
      }

      let port = this.location.port.length > 0 ? `:${this.location.port}` : '';
      let url = `${this.location.protocol}//${this.location.hostname}${port}${this.baseHref}`;
      console.log('gotoLocale', url, this.storedlocale, this.location);
      window.location.href = url;
    }
  }

}
