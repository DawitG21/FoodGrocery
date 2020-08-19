import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import * as $ from 'jquery';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { timers } from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  languages = [
    { code: 'en-US', label: 'English' },
    { code: 'am', label: 'Amharic' },
  ];

  storedlocale: string;

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    @Inject(APP_BASE_HREF) public baseHref: string,
    public location: PlatformLocation
  ) {
    this.storedlocale = localStorage.getItem('locale');
  }

  cacheLocalePreference(locale) {
    localStorage.setItem('locale', locale);
  }


  ngOnInit() {
    // stored locale exists
    console.log(this.storedlocale, this.localeId);
    if (this.storedlocale && this.storedlocale !== this.localeId) {
      console.log('redirecting');
      let port = this.location.port.length > 0 ? `:${this.location.port}` : '';
      let url = `${this.location.protocol}//${this.location.hostname}${port}${this.baseHref}${this.storedlocale}${this.location.pathname}`;
      console.log(url);
      // window.location.href = url;
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

  // // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  gotoLocale(lang: any): void {
    // close any dialog window

    
    // redirect if selected lang is different from current locale
    if (lang.code !== this.localeId) {
      this.topFunction();
      this.cacheLocalePreference(lang.code);

      let port = this.location.port.length > 0 ? `:${this.location.port}` : '';
      let url = `${this.location.protocol}//${this.location.hostname}${port}${this.baseHref}${lang.code}${this.location.pathname}`;
      window.location.href = url;
    }
  }

}
