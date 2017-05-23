import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';

export const firebaseConfig = {
    apiKey: 'AIzaSyCQEVOeFUTFGGqaTrLVNlfx47JPEdD3SR4',
    authDomain: 'lazy-h-movies.firebaseapp.com',
    databaseURL: 'https://lazy-h-movies.firebaseio.com',
    projectId: 'lazy-h-movies',
    storageBucket: 'lazy-h-movies.appspot.com',
    messagingSenderId: '733231834753'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}