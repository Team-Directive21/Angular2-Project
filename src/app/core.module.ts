import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
     AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

const firebaseConfig = {
    apiKey: "AIzaSyCkDePcXt-Ucv2CSxI5PuVCBoveZTDXHlQ",
    authDomain: "angularproject-f0377.firebaseapp.com",
    databaseURL: "https://angularproject-f0377.firebaseio.com",
    storageBucket: "angularproject-f0377.appspot.com",
    messagingSenderId: "472621522629"
    };

    @NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect
    })
  ],
  exports: [
    BrowserModule,
  ]
})
export class CoreModule {}