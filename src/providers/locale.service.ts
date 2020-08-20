import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';
import { ConsoleService } from 'src/shared/console.service';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  storedlocale: string;

  constructor(
    @Inject(LOCALE_ID) private localeId: string,
    @Inject(APP_BASE_HREF) private baseHref: string,
    private location: PlatformLocation,
    private consoleService: ConsoleService
  ) {
    this.storedlocale = localStorage.getItem('locale');
    this.consoleService.consoleLocale(this.storedlocale, this.localeId);
    this.consoleService.consoleBaseHref(baseHref);
    this.consoleService.consoleLocaleId(localeId);
    this.consoleService.consoleLocation(location);
  }

  redirectToStoredLocale() {
    let port = this.location.port.length > 0 ? `:${this.location.port}` : '';
    let url = `${this.location.protocol}//${this.location.hostname}${port}${this.baseHref}${this.storedlocale}${this.location.pathname}`;
    window.location.href = url;
    this.consoleService.consoleMessage(url);
    this.consoleService.consoleMessage('redirecting');
  }

  switchLocale(lang: any) {
    let port = this.location.port.length > 0 ? `:${this.location.port}` : '';
    let url = `${this.location.protocol}//${this.location.hostname}${port}${this.baseHref}${lang.code}${this.location.pathname}`;
    window.location.href = url;
    this.consoleService.consoleMessage(url);
    this.consoleService.consoleMessage('redirecting');
  }
}
