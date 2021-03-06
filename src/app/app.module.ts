import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//import { AngularFireModule, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { SortPipe } from './pipes/sort.pipe';
import { AlertService, AuthenticationService } from './services/index';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core-module';
import { GroupsComponent } from './groups/groups.component';
import { DirectionsComponent } from './directions/directions.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TopDriversComponent } from './top-drivers/top-drivers.component';

import { AuthGuard } from './guards/auth.guard';
import { SofiaPlovdivComponent } from './directions/sofia-plovdiv/sofia-plovdiv.component';
import { LoginFbComponent } from './login-fb/login-fb.component';
import { PlovdivSofiaComponent } from './directions/plovdiv-sofia/plovdiv-sofia.component';
import { SofiaBurgasComponent } from './directions/sofia-burgas/sofia-burgas.component';
import { BurgasSofiaComponent } from './directions/burgas-sofia/burgas-sofia.component'


const appRoutes: Routes = [

  
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
{path:'directions',component:DirectionsComponent},
 { path: 'contact', component: ContactComponent },
{path:'create-post',component:PostsComponent,canActivate:[AuthGuard]},
 {path: 'top-drivers', component: TopDriversComponent},

{path:'directions',component:DirectionsComponent},
{path:'directions/sofia-plovdiv',component:SofiaPlovdivComponent,canActivate:[AuthGuard]},
{path:'directions/plovdiv-sofia',component:PlovdivSofiaComponent,canActivate:[AuthGuard]},
{path:'directions/sofia-burgas',component:SofiaBurgasComponent,canActivate:[AuthGuard]},
{path:'directions/burgas-sofia',component:BurgasSofiaComponent,canActivate:[AuthGuard]},
{path:'login-fb',component:LoginFbComponent},
{path:'**',redirectTo:'home'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    SortPipe,
    HomeComponent,
    GroupsComponent,
    DirectionsComponent,
    PostsComponent,
    FooterComponent,

ContactComponent,
    TopDriversComponent,
    SofiaPlovdivComponent,
    LoginFbComponent,
    PlovdivSofiaComponent,
    SofiaBurgasComponent,
    BurgasSofiaComponent

    

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
    BaseRequestOptions,

    AuthGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
