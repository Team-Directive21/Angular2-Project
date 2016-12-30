import { Component } from '@angular/core';

import { AngularFire, AuthProviders } from 'angularfire2';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuth = false;
  authColor = 'warn';
  user = {};

  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(
      user => this._changeState(user),
      error => console.trace(error)
    );
    
  }

  login(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from)
    });
  }
  logout() {
    this.af.auth.logout();
    localStorage.clear();
  }

  private _changeState(user: any = null) {
<<<<<<< HEAD
    if (user) {
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user)
    } else {
=======
    if(user) {
      console.log("vliza");
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user)
      localStorage.setItem('myUser',JSON.stringify(this.user));
    }
    else {
>>>>>>> e0f7e7eec3b2a2908ec1b2c107f826adbc074638
      this.isAuth = false;
      this.authColor = 'warn';
      this.user = {};
      localStorage.clear();
    }
  }

  private _getUserInfo(user: any): any {
    if (!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

  private _getProvider(from: string) {
    switch (from) {
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'github': return AuthProviders.Github;
      case 'google': return AuthProviders.Google;
    }
  }

  
  isUserLoggedIn() {
    return (Object.keys(this.user).length === 0);
  }
}