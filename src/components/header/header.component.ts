import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { LocaleService } from 'src/providers/locale.service';
import { DebugService } from 'src/shared/debug.service';
import { DataProvider } from 'src/providers/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  languages = [];
  storedlocale: string;
  closeResult: string;

  constructor(
    @Inject(LOCALE_ID) private _localeId: string,
    @Inject(APP_BASE_HREF) private _baseHref: string,
    private _localService: LocaleService,
    private _consoleService: DebugService,
    private modalService: NgbModal,
    private _data: DataProvider
  ) {
    this.storedlocale = localStorage.getItem('locale');
    this.languages = this._data.languages;
  }

  ngOnInit() {
    this._localService.toggleNavbar();
    this._consoleService.consoleLocale(this.storedlocale, this._localeId);
    // stored locale exists    
    if (this.storedlocale && this.storedlocale !== this._localeId) {
      this._consoleService.consoleMessage('redirecting');
      this._localService.redirect();
    }
  }

  cacheLocalePreference(locale: string) {
    localStorage.setItem('locale', locale);
  }

  gotoLocale(lang: any): void {
    // TODO: close any dialog window
    this.dismissModalReason(lang);
    // redirect if selected lang is different from current locale
    if (lang.code !== this._localeId) {
      this.topFunction();
      this.cacheLocalePreference(lang.code);
      this._localService.navigatetoLocale(lang);
    }
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.dismissModalReason(reason)}`;
    });
  }

  dismissModalReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'By pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'By clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
