import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login'
import { EditePersonPage } from '../pages/edite-person/edite-person'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
    apiKey: "AIzaSyBWx12F7c4PPzxZWxTfmIO8G9w5fRHZb_U",
    authDomain: "vibrant-40db4.firebaseapp.com",
    databaseURL: "https://vibrant-40db4.firebaseio.com",
    projectId: "vibrant-40db4",
    storageBucket: "vibrant-40db4.appspot.com",
    messagingSenderId: "991466614512"
  };



// config = {
//   apiKey: "AIzaSyBWx12F7c4PPzxZWxTfmIO8G9w5fRHZb_U",
//   authDomain: "vibrant-40db4.firebaseapp.com",
//   databaseURL: "https://vibrant-40db4.firebaseio.com",
//   projectId: "vibrant-40db4",
//   storageBucket: "vibrant-40db4.appspot.com",
//   messagingSenderId: "991466614512"
// };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EditePersonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EditePersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
