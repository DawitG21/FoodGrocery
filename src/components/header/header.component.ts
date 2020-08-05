import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import * as $ from 'jquery';
import { APP_BASE_HREF, Location } from '@angular/common';
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

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    @Inject(APP_BASE_HREF) public baseHref: string,
    public location: Location
  ) {
    // this.cacheLocalePreference();
  }

  ngOnInit() {
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

  cacheLocalePreference() {
    if (this.localeId === 'en-US') {
      // console.log('localeID', this.localeId);
      // console.log('baseHref', this.baseHref);
      localStorage.removeItem('am');
      localStorage.setItem('en-US', location.href);
      console.log('enPath', location.href);
    } else if (this.localeId === 'am') {
      // console.log('localeID', this.localeId);
      // console.log('baseHref', this.baseHref);
      localStorage.removeItem('en-US');
      localStorage.setItem('am', location.href);
      console.log('amPath', location.href);
    }
  }

  /*  public languageChanged(event: any) {
     const value = event.target.value;
     this.language = value;
     console.log(value);
   } */

}
