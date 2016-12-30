import { Component, OnInit } from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {
     AngularFireModule, 
  AuthMethods, 
  AuthProviders 
} from "angularfire2";

import {database} from 'firebase';

import {AppComponent} from '../app.component';

import {FirebaseAuth,FirebaseAuthState} from 'angularfire2';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})




export class PostsComponent implements OnInit {
  items:FirebaseListObservable<any[]>;

  constructor(af:AngularFire,fa:FirebaseAuth) {
  console.log(localStorage.getItem("myUser"));

    // if(af.auth){
    //   console.log("Ima");
      
    // }
    // else{
    //   console.log("nqma");
    // }


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
