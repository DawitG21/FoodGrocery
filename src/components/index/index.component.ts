import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF, Location } from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  localePath: any;
  defaultPathDev: string;
  defaultPathLive: string;

  constructor(
    public route: Router,
    public location: Location,
    @Inject(LOCALE_ID) public localeId: string,
    @Inject(APP_BASE_HREF) public baseHref: string
  ) {
    this.defaultPathDev = 'http://localhost:4200';
    this.defaultPathLive = 'http://localhost/live';
    this.localePath = localStorage.getItem('localePath');

    console.log('baseHref', baseHref);
    console.log('location', location);
    console.log('localeID', localeId);
    console.log('localePath', this.localePath);
  }

  ngOnInit() {
  /*   if (this.localePath !== null) {
      if (location.href === this.localePath) {
        return;
      } else {
        window.location.href = this.localePath;
      }
    } else {
      window.location.href = this.defaultPathDev;
    } */
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
