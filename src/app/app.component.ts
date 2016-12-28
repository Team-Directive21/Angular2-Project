import { Component } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
   //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  user = {};
  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
    console.log(this.user);
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login() {
    console.log("hereeee");
  this.af.auth.login({
    provider: AuthProviders.Facebook,
    //method: AuthMethods.Redirect
  });
}
 
logout() {
  this.af.auth.logout();
}

}
