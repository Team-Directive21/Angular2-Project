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
  selector: 'app-burgas-sofia',
  templateUrl: './burgas-sofia.component.html',
  styleUrls: ['./burgas-sofia.component.css']
})
export class BurgasSofiaComponent implements OnInit {

 
  posts: FirebaseListObservable<any[]>;
  constructor(af:AngularFire) {
    
    this.posts = af.database.list('/burgas-sofia');

    this.posts.subscribe(
      val => console.log(val)
    );
   }

  ngOnInit() {
    
  }

}
