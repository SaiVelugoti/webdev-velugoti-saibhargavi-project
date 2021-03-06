import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QuillEditorModule} from 'ngx-quill-editor';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {TestComponent} from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import {ComponentNameComponent} from './component-name/component-name.component';
import {LoginComponent} from './components/user/login/login.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {UserService} from './services/user.service.client';
import {SharedService} from './services/shared.service.client';
import {AuthGuard} from './services/auth-guard.service';
import {EventSearchComponent} from './components/event-search/event-search.component';
import {EventSearchService} from './services/event-search.service.client';
import {EventDetailsComponent} from './components/event-details/event-details.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ManageUserComponent} from './components/manage-user/manage-user.component';
import {EventCommentComponent} from './components/event-comment/event-comment.component';
import {CommentService} from './services/comment.service.client';
import { OtherUserDashboardComponent } from './components/other-user-dashboard/other-user-dashboard.component';
import { ManageEventsComponent } from './components/manage-events/manage-events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import {ManageEventService} from "./services/manage-event.service.client";
import { FlickrSearchComponent } from './components/flickr-search/flickr-search.component';
import {FlickrService} from "./services/flickr.service.client";

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
    EventSearchComponent,
    EventDetailsComponent,
    DashboardComponent,
    ManageUserComponent,
    EventCommentComponent,
    OtherUserDashboardComponent,
    ManageEventsComponent,
    AddEventComponent,
    EditEventComponent,
    FlickrSearchComponent,
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
    CommentService,
    AuthGuard,
  ManageEventService,
  FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
