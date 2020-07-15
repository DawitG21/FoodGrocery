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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  return new TranslateHttpLoader(http, './locale/i18n/', '.xlf');
}

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
    ServicetermsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
