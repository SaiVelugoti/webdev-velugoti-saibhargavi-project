import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { ComponentNameComponent } from './component-name/component-name.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service.client';
import {AuthGuard} from './services/auth-guard.service';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import {EventSearchService} from './services/event-search.service.client';
import { EventDetailsComponent } from './components/event-details/event-details.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    ComponentNameComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WelcomePageComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    QuillEditorModule,
    Routing
  ],
  // Client Side services here
  providers: [
    TestService,
    UserService,
    SharedService,
    EventSearchService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
