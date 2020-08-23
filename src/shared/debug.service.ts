import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DebugService {

  constructor() { }

  consoleMessage(message: any) {
    if (!environment.production) {
      console.log(message);
    }
  }

  consoleBaseHref(message: any) {
    if (!environment.production) {
      console.log('baseHref', message);
    }
  }

  consoleLocaleId(message: any) {
    if (!environment.production) {
      console.log('localeID', message);
    }
  }

  consoleLocation(message: any) {
    if (!environment.production) {
      console.log('location', message);
    }
  }

  consoleLocale(cookie: any, id: any) {
    if (!environment.production) {
      console.log('storedLocale:', cookie, id);
    }
  }

  consoleNgInit(path: any, locale: any, location: any) {
    if (!environment.production) {
      console.log('ngInit:', path, locale, location);
    }
  }

  consoleGoLocale(path: any, locale: any, location: any) {
    if (!environment.production) {
      console.log('goToLocale:', path, locale, location);
    }
  }
}
