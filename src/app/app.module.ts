import { ClassRegisterPage } from './../pages/class-register/class-register';
import { PatientRegisterPage } from './../pages/patient-register/patient-register';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PatientProvider } from '../providers/patient/patient';
import { ReminderPage } from '../pages/reminder/reminder';
import { EmailComposer } from '@ionic-native/email-composer';





const firebaseAuth= {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PatientRegisterPage,
    ReminderPage,
    ClassRegisterPage

    
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrMaskerModule,
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PatientRegisterPage,
    ReminderPage,
    ClassRegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    PatientProvider,
    EmailComposer

  ]
})
export class AppModule {}
