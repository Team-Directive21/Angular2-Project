import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

//import { AngularFireModule, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import {  AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SortPipe } from './pipes/sort.pipe';
import {AlertService, AuthenticationService} from './services/index';
import { HomeComponent } from './home/home.component';

import {CoreModule} from './core.module';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    SortPipe,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    CoreModule
  ],
  providers: [
        AlertService,
        AuthenticationService,
        UserService,

        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
