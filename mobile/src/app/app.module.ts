import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import 'hammerjs';
import { NewOrderComponent } from './new-order/new-order.component';
import { SelectActionComponent } from './select-action/select-action.component';

export const firebaseConfig = {
   apiKey: "AIzaSyDV_ky2n9xsvuMpst6UXTz1zYYBoRPdszE",
   authDomain: "dbmikko.firebaseapp.com",
   databaseURL: "https://dbmikko.firebaseio.com",
   storageBucket: "dbmikko.appspot.com",
   messagingSenderId: "895556899408"
};

const appRoutes: Routes = [
  { path: '', component: SelectActionComponent },
  { path: 'order', component: NewOrderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewOrderComponent,
    SelectActionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}