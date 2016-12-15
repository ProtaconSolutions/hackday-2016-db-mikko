import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import 'hammerjs';

export const firebaseConfig = {
   apiKey: "AIzaSyDV_ky2n9xsvuMpst6UXTz1zYYBoRPdszE",
   authDomain: "dbmikko.firebaseapp.com",
   databaseURL: "https://dbmikko.firebaseio.com",
   storageBucket: "dbmikko.appspot.com",
   messagingSenderId: "895556899408"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}