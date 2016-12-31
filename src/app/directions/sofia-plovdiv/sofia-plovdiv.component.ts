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
  selector: 'app-sofia-plovdiv',
  templateUrl: './sofia-plovdiv.component.html',
  styleUrls: ['./sofia-plovdiv.component.css']
})
export class SofiaPlovdivComponent implements OnInit {
posts;
  constructor(af:AngularFire) {
    
    this.posts = af.database.list('/sofia-plovdiv');

    this.posts.subscribe(
      val => console.log(val)
    );
   }

  ngOnInit() {
  }


}
