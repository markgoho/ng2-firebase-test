import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { RetrObjectComponent } from './retr-object.component';
import { RetrListComponent } from './retr-list.component';
import { QueryListComponent } from './query-list.component';
import { UserAuthComponent } from './user-auth.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBaCnPFqjJ9fRobOmWbT-10DSyQ9xakWw8",
  authDomain: "fir-test-3d4fc.firebaseapp.com",
  databaseURL: "https://fir-test-3d4fc.firebaseio.com",
  storageBucket: "fir-test-3d4fc.appspot.com",
  messagingSenderId: "1070702292556"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}


@NgModule({
  declarations: [
    AppComponent,
    RetrObjectComponent,
    RetrListComponent,
    QueryListComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
