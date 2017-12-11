import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {EventService} from '../../services/event.service.client';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersFollowing: [{}];
  followedByUsers: [{}];
  eventsInterestedIn: [{}];
  otherUsers: [{}];
  user: any;
  isAdmin: boolean;
  isOrganizer: boolean;

// private eventService: EventService,
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.user);
    if (this.user.role === 'ADMIN') {
      console.log('User is Admin');
      this.isAdmin = true;
    }
    if (this.user.role === 'ORGANIZER') {
      console.log('User is Organizer');
      this.isOrganizer = true;
    }
    this.userService.findUserById(this.user['_id']).subscribe((user: any) => {
      this.followedByUsers = user.followedBy;
      this.usersFollowing = user.followingUsers;
    });
    this.userService.findUsers().subscribe((users: any) => {
      this.otherUsers = users;
      this.otherUsers.forEach((user, index) => {
        if (user['_id'] === this.user['_id']) {
          this.otherUsers.splice(index, 1);
        }
      });
      if (this.usersFollowing !== undefined && this.usersFollowing !== null) {
        this.otherUsers.forEach((user1, index) => {
          this.usersFollowing.forEach((user2, index1) => {
            if (user1['_id'] === user2) {
              this.otherUsers.splice(index, 1);
            }
          });
        });
      }
    });
    this.userService.findEventsInterested(this.user['_id']).subscribe((eventsInterested: any) => {
      this.eventsInterestedIn = eventsInterested[0].favoriteEvents;
    });

    if (this.followedByUsers !== undefined) {
      this.followedByUsers.forEach((user, index) => {
        this.userService.findUserById(user[0]).subscribe((n: any) => {
          this.followedByUsers.splice(index, 1, {_id: user[0], username: n['username']});
        });
      });
    }

    if (this.usersFollowing !== undefined) {
      this.usersFollowing.forEach((user, index) => {
        this.userService.findUserById(user[0]).subscribe((n: any) => {
          this.usersFollowing.splice(index, 1, {_id: user[0], username: n['username']});
        });
      });
    }
  }

  addToFollow(userId) {
    this.userService.addUserToFollow(this.user['_id'], userId).subscribe((response: any) => {
      this.userService.addUserToFollowedBy(this.user['_id'], userId).subscribe((response1: any) => {
        this.userService.findUserById(this.user['_id']).subscribe((user: any) => {
          this.followedByUsers = user.followedBy;
          this.usersFollowing = user.followingUsers;
          this.otherUsers.forEach((user1, index) => {
            if (user1['_id'] === userId) {
              this.otherUsers.splice(index, 1);
            }
          });
        });
      });
    });
  }

  unFollow(userId) {
    this.userService.removeUserFromFollow(this.user['_id'], userId).subscribe((response: any) => {
      this.userService.removeUserFromFollowedBy(this.user['_id'], userId).subscribe((response1: any) => {
        this.userService.findUserById(this.user['_id']).subscribe((user: any) => {
          this.followedByUsers = user.followedBy;
          this.usersFollowing = user.followingUsers;
          this.userService.findUserById(userId).subscribe((userNew: any) => {
            this.otherUsers.splice(1, 0, userNew);
          });
        });
      });
    });
  }

  removeFromFavorites(eveId) {
    console.log('removeFromFavorites ->');
    console.log(this.user['_id']);
    this.userService.removeFromFavorites(this.user['_id'], eveId).subscribe((response: any) => {
      this.userService.findEventsInterested(this.user['_id']).subscribe((eventsInterested: any) => {
        this.eventsInterestedIn = eventsInterested[0].favoriteEvents;
      });
    });
  }

  goToEventDetailsComments(interestedEvent) {
    console.log(interestedEvent);
    this.router.navigate(['/comments', interestedEvent]);
  }

  getUserName(uId) {
    console.log(uId);
    if (uId !== undefined && uId !== '') {
      this.userService.findUserById(uId).subscribe((user: any) => {
        console.log(user['username']);
        return user;
      });
    }
  }

  logout() {
    this.userService.logout().subscribe((user: any) => {
      this.router.navigate(['/login']);
    });
  }
}

