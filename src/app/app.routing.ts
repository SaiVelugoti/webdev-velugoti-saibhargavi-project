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
  { path : 'otherUser/:id', component: OtherUserDashboardComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
