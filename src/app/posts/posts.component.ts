import { Component, OnInit } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {
     AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

import {database} from 'firebase';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})



export class PostsComponent implements OnInit {
  items:FirebaseListObservable<any[]>;

  constructor(af:AngularFire) {
    this.items = af.database.list('/sofia-plovdiv');
    
    this.items.subscribe(
      val => console.log(val)
    );
    // var root = database().ref();
    // root.on('value',function(snap){
    //   console.log(snap.val());
    // })
   }

  ngOnInit() {
  }

  

}
