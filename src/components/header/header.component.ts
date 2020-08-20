import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import * as $ from 'jquery';
import { LocaleService } from 'src/providers/locale.service';

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
    @Inject(LOCALE_ID) private localeId: string,
    private localeService: LocaleService,
  ) { }

  ngOnInit() {
    this.checkforStoredLocale();
    this.toggleNavbar();
  }

  checkforStoredLocale() {
    // stored locale exists
    // if (this.storedlocale && this.storedlocale === this.localeId) {
    if (this.localeService.storedlocale && this.localeService.storedlocale !== this.localeId) {
      this.localeService.redirectToStoredLocale();
    }
    // } 
  }

  cacheLocalePreference(locale: any) {
    localStorage.setItem('locale', locale);
  }

  gotoLocale(lang: any): void {
    // redirect if selected lang is different from current locale
    if (lang.code !== this.localeId) {
      this.topFunction();
      this.cacheLocalePreference(lang.code);
      this.localeService.switchLocale(lang);
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  toggleNavbar() {
    // disable body scroll when navbar is in active
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

}
