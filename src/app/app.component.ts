import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {User} from 'firebase/app';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    user: Observable<User>;
    videos: FirebaseListObservable<any[]>;

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
        this.user = this.afAuth.authState;
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.videos = af.list('/videos');
            } else {
                this.videos = null;
            }
        });
    }

    login() {
        this.afAuth.auth.signInAnonymously();
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}