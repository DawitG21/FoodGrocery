import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { IndexComponent } from '../components/index/index.component';
import { AboutComponent } from '../components/about/about.component';
import { JoinUsComponent } from '../components/join-us/join-us.component';
import { FaqComponent } from '../components/faq/faq.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ServicetermsComponent } from '../components/serviceterms/serviceterms.component';
import { FooterComponent } from '../components/footer/footer.component';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataProvider } from 'src/providers/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    IndexComponent,
    JoinUsComponent,
    ServicetermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  // providers: [{ provide: LOCALE_ID, useValue: 'am' }],
  providers: [
    {      
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    },
    DataProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
