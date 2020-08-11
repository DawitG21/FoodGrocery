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
      localStorage.setItem('localePath', location.href);
      console.log('localePathHead', location.href);
    } else if (this.localeId === 'am') {
      localStorage.setItem('localePath', location.href);
      console.log('localePathHead', location.href);
    }
  }

}
