import {Component, Input} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase/app';
import {User} from 'firebase/app';
import {Video} from './video-item/video';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @Input() title: string;
    user: Observable<User>;
    videos: Video[];
    filteredVideos: Video[];

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
        this.user = this.afAuth.authState;
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                af.list('/videos')
                    .valueChanges()
                    .subscribe(vids => {
                        this.videos = <Video[]>vids;
                        this.filterVideos();
                    });
            } else {
                this.videos = null;
                this.filteredVideos = null;
            }
        });
    }

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    titleChanged($event) {
        console.log($event.target.value);
        this.title = $event.target.value;
        this.filterVideos();
    }

    private filterVideos() {
        this.filteredVideos = this.videos.filter((video: Video) => {
            return video.title.search(new RegExp(this.title, 'i')) > -1;
        });
    }
}