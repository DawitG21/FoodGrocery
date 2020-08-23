import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';
import { DebugService } from 'src/shared/debug.service';
import * as $ from 'jquery';
/* import { languageModel } from 'src/models/language.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable'; */

@Injectable({
  providedIn: 'root'
})

export class LocaleService {

  storedlocale: string;

  constructor(
    @Inject(LOCALE_ID) private _localeId: string,
    @Inject(APP_BASE_HREF) private _baseHref: string,
    private _location: PlatformLocation,
    private _consoleService: DebugService,
    // private _http: HttpClient
  ) {
    this.storedlocale = localStorage.getItem('locale');
  }

  redirect() {
    let langExist = false;
    // navigating from existing locale e.g. /am/ or /inibla/am/
    if (this._baseHref.indexOf(`/${this._localeId}/`) !== -1) {
      this._baseHref = this._baseHref.replace(this._localeId, this.storedlocale);
      langExist = true;
    }
    // navigating from root baseHref e.g / or /inibla/
    if (!langExist && this.storedlocale && this.storedlocale !== this._localeId) {
      this._baseHref = `${this._baseHref}${this.storedlocale}/`
    }

    let port = this._location.port.length > 0 ? `:${this._location.port}` : '';
    let url = `${this._location.protocol}//${this._location.hostname}${port}${this._baseHref}`;
    this._consoleService.consoleNgInit(url, this.storedlocale, this._location);
    window.location.href = url;
  }

  navigatetoLocale(lang: any) {
    let langExist = false;
    // navigating from existing locale e.g. /am/ or /inibla/am/
    if (this._baseHref.indexOf(`/${this._localeId}/`) !== -1) {
      this._baseHref = this._baseHref.replace(this._localeId, lang.code);
      langExist = true;
    }
    // navigating from root baseHref e.g / or /inibla/
    if (!langExist) {
      this._baseHref = `${this._baseHref}${lang.code}/`
    }

    let port = this._location.port.length > 0 ? `:${this._location.port}` : '';
    let url = `${this._location.protocol}//${this._location.hostname}${port}${this._baseHref}`;
    this._consoleService.consoleGoLocale(url, this.storedlocale, this._location);
    window.location.href = url;
  }

  toggleNavbar() {
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

  /*  getLanguages(): Observable<languageModel> {
   return this._http.get()
     .map((response: any) => response);
 }  */
}
