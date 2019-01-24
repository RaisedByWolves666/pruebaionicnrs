import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FilmsPage } from '../pages/films/films';
import { StarshipsPage } from '../pages/starships/starships';
import { VehiclesPage } from '../pages/vehicles/vehicles';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';

import { CacheModule } from 'ionic-cache';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    FilmsPage,
    StarshipsPage,
    VehiclesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmsPage,
    StarshipsPage,
    VehiclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
