import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AuthGuard} from './services/auth-guard.service';
import {EventSearchComponent} from './components/event-search/event-search.component';
import {EventDetailsComponent} from './components/event-details/event-details.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ManageUserComponent} from './components/manage-user/manage-user.component';
import {EventCommentComponent} from './components/event-comment/event-comment.component';
import {OtherUserDashboardComponent} from "./components/other-user-dashboard/other-user-dashboard.component";
import {ManageEventsComponent} from "./components/manage-events/manage-events.component";
import {AddEventComponent} from "./components/add-event/add-event.component";
import {FlickrSearchComponent} from "./components/flickr-search/flickr-search.component";

const APP_ROUTES: Routes = [
  { path : '' , component: EventSearchComponent},
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'profile' , component: ProfileComponent, canActivate: [AuthGuard]},
  // { path : 'eventDetails/:id', component: EventDetailsComponent, canActivate: [AuthGuard]},
  { path : 'eventDetails/:id', component: EventDetailsComponent},
  { path : 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path : 'manageUsers', component: ManageUserComponent, canActivate: [AuthGuard]},
  { path : 'eventSearch', component: EventSearchComponent, canActivate: [AuthGuard]},
  { path : 'comments/:interestedEvent', component: EventCommentComponent, canActivate: [AuthGuard]},
  { path : 'detailsManager/:eventId', component: EventCommentComponent, canActivate: [AuthGuard]},
  { path : 'otherUser/:id', component: OtherUserDashboardComponent, canActivate: [AuthGuard]},
  { path : 'manageEvents', component: ManageEventsComponent, canActivate: [AuthGuard]},
  { path : 'addEvent', component: AddEventComponent, canActivate: [AuthGuard]},
  { path : 'flickrSearch', component: FlickrSearchComponent, canActivate: [AuthGuard]},
  { path : 'addingImage/:url', component: AddEventComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
