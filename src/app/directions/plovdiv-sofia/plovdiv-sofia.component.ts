import { Component, OnInit } from '@angular/core';


import { database } from 'firebase';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import {FirebaseAuth,FirebaseAuthState} from 'angularfire2';

@Component({
  selector: 'app-plovdiv-sofia',
  templateUrl: './plovdiv-sofia.component.html',
  styleUrls: ['./plovdiv-sofia.component.css']
})
export class PlovdivSofiaComponent implements OnInit {

 posts: FirebaseListObservable<any[]>;
  constructor(af:AngularFire) {
    
    this.posts = af.database.list('/plovdiv-sofia');

    this.posts.subscribe(
      val => console.log(val)
    );
   }

  ngOnInit() {
    
  }


}
