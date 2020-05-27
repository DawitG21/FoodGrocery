import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { FaqComponent } from '../components/faq/faq.component';
import { JoinUsComponent } from '../components/join-us/join-us.component';
import { IndexComponent } from '../components/index/index.component';
import { ServicetermsComponent } from 'src/components/serviceterms/serviceterms.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'joinus', component: JoinUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'termsofservice', component: ServicetermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
