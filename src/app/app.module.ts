import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FaqComponent } from '../components/faq/faq.component';
import { IndexComponent } from '../components/index/index.component';
import { JoinUsComponent } from '../components/join-us/join-us.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServicetermsComponent } from '../components/serviceterms/serviceterms.component';

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
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
