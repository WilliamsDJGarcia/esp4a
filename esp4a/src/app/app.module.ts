import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraficaComponent } from './grafica/grafica.component';
import { EspService } from './services/esp.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';



const firebaseConfig: any = {
  apiKey: "AIzaSyBy88xbwA_jpQAz9jjfy_xvFoQ7V91bbs8",
  authDomain: "esp4a-iot-3f584.firebaseapp.com",
  databaseURL: "https://esp4a-iot-3f584.firebaseio.com",
  projectId: "esp4a-iot-3f584",
  storageBucket: "esp4a-iot-3f584.appspot.com",
  messagingSenderId: "661324301888"
}

@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  providers: [EspService],
  bootstrap: [AppComponent]
})
export class AppModule { }
