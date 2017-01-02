import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { database } from 'firebase';

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
  items: FirebaseListObservable<any[]>;
  currentUser:any;
  directions:any[];
  constructor(af:AngularFire,fa:FirebaseAuth) {
    this.directions = ["sofia-plovdiv","plovdiv-sofia","sofia-burgas","burgas-sofia"];
  console.log(localStorage.getItem("myUser"));
this.currentUser = localStorage.getItem("myUser");
    // if(af.auth){
    //   console.log("Ima");
      
    // }
    // else{
    //   console.log("nqma");
    // }



    // var root = database().ref();
    // root.on('value',function(snap){
    //   console.log(snap.val());
    // })
  }

  postPost(selec,day,time,seats,price){
    console.log(selec);
    console.log(day);
    database().ref('/'+selec).push({user:JSON.parse(this.currentUser),day:day,time:time,seats:seats,price:price});
  }


  ngOnInit() {
  }

}
