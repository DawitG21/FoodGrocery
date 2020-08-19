import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF, Location } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  storedlocale: any;
  baseUrl: string;
  defaultPathDev: string;
  defaultPathLive: string;

  constructor(
    public route: Router,
    public location: Location,
    @Inject(LOCALE_ID) public localeId: string,
    @Inject(APP_BASE_HREF) public baseHref: string
  ) {
    this.baseUrl = 'http://localhost';
    this.defaultPathDev = 'http://localhost:4200';
    this.defaultPathLive = 'http://localhost/inibla';
    this.storedlocale = localStorage.getItem('locale');
    console.log('storedlocale', this.storedlocale);
  }

  ngOnInit() {
    if (this.storedlocale !== null) {
      if (this.baseHref === this.storedlocale) {
        //console.log('baseHref', this.baseHref);
        //console.log('location', location);
        //console.log('localeID', this.localeId);        
        return;
      } else if (this.baseHref !== this.storedlocale) {
        window.location.href = this.baseUrl + this.storedlocale;
        //console.log('baseHref', this.baseHref);
        //console.log('location', location);
        //console.log('localeID', this.localeId);
      }
    } else {
      // localStorage.setItem('locale', this.baseHref);
      window.location.href = this.defaultPathDev;
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
