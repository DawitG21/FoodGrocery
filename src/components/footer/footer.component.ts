import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF, Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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

  ngOnInit() { }

  // // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  cacheLocalePreference() {
    if (this.localeId === 'en-US') {
      localStorage.removeItem('amPath');
      localStorage.setItem('enPath', location.href);
      // console.log('localeID', this.localeId);
      // console.log('baseHref', this.baseHref);
      // console.log('baseHref', this.location);
    } else if (this.localeId === 'am') {
      localStorage.removeItem('enPath');
      localStorage.setItem('amPath', location.href);
      // console.log('localeID', this.localeId);
      // console.log('baseHref', this.baseHref);
      // console.log('baseHref', this.location);
    }
  }

}
