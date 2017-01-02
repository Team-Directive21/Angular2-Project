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
  selector: 'app-sofia-burgas',
  templateUrl: './sofia-burgas.component.html',
  styleUrls: ['./sofia-burgas.component.css']
})
export class SofiaBurgasComponent implements OnInit {

  posts: FirebaseListObservable<any[]>;
  constructor(af:AngularFire) {
    
    this.posts = af.database.list('/sofia-burgas');

    this.posts.subscribe(
      val => console.log(val)
    );
   }

  ngOnInit() {
    
  }

}
