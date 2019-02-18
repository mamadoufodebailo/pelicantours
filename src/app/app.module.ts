import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ActualitePage} from "../pages/actualite/actualite";
import { ActualiteServiceProvider } from '../providers/actualite-service/actualite-service';
import { SlideServiceProvider } from '../providers/slide-service/slide-service';
import {HttpClientModule} from "@angular/common/http";
import {ActualiteDetailPage} from "../pages/actualite-detail/actualite-detail";
import { ModeleServiceProvider } from '../providers/modele-service/modele-service';
import {VolPage} from "../pages/vol/vol";
import {HotelPage} from "../pages/hotel/hotel";
import {AssurancePage} from "../pages/assurance/assurance";
import {TransportPage} from "../pages/transport/transport";
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";
import {PartenairePage} from "../pages/partenaire/partenaire";
import { PartenaireServiceProvider } from '../providers/partenaire-service/partenaire-service';
import {PresentationPage} from "../pages/presentation/presentation";
import {PelerinagePage} from "../pages/pelerinage/pelerinage";
import {ServicePage} from "../pages/service/service";
import { ServiceProvider } from '../providers/service/service';

//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MyApp,
    ActualitePage,
    ContactPage,
    HomePage,
    TabsPage,
    ActualiteDetailPage,
    VolPage,
    HotelPage,
    AssurancePage,
    TransportPage,
    PartenairePage,
    PresentationPage,
    PelerinagePage,
    ServicePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août',
        'Septembre', 'Octobre', 'Novembre', 'Decembre' ],
      monthShortNames: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Dec'],
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi' ,'Samedi'],
      dayShortNames: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    }),
    IonicStorageModule.forRoot(),
    //FontAwesomeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActualitePage,
    ContactPage,
    HomePage,
    TabsPage,
    ActualiteDetailPage,
    VolPage,
    HotelPage,
    AssurancePage,
    TransportPage,
    PartenairePage,
    PresentationPage,
    PelerinagePage,
    ServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActualiteServiceProvider,
    SlideServiceProvider,
    ModeleServiceProvider,
    ContactServiceProvider,
    PartenaireServiceProvider,
    ServiceProvider
  ]
})
export class AppModule {}
