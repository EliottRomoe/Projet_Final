import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportingComponent } from './reporting/reporting.component';
import { CvComponent } from './cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { GITComponent } from './git/git.component';
import { AlgorithmeComponent } from './algorithme/algorithme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: 'API', component: ApiComponent },
  // {path: '', component: AppComponent }, // modifié
  {path: '', component: AccueilComponent},
  {path: 'Reporting', component: ReportingComponent},
  {path: 'CV' , component: CvComponent},
  // {path: 'Accueil' , component: AccueilComponent}, // à deeletr
  {path: 'Algorithme' , component: AlgorithmeComponent},
  {path: 'Contact' , component: ContactComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    ReportingComponent,
    CvComponent,
    AccueilComponent,
    GITComponent,
    AlgorithmeComponent,
    ContactComponent,
    
      
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbAccordionModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
