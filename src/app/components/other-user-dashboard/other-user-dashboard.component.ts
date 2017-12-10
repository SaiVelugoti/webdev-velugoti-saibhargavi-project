import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-other-user-dashboard',
  templateUrl: './other-user-dashboard.component.html',
  styleUrls: ['./other-user-dashboard.component.css']
})
export class OtherUserDashboardComponent implements OnInit {

  otherUserId: string;
  otherUser_Events: [{}];
  otherUserName: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.otherUserId = params['id'];
        this.userService.findUserById(this.otherUserId).subscribe((user: any) => {
          this.otherUserName = user['username'];
        })
        this.userService.findEventsInterested(this.otherUserId).subscribe((eventsInterested: any) => {
          console.log(eventsInterested[0].favoriteEvents);
          this.otherUser_Events = eventsInterested[0].favoriteEvents;
        });
      });
  }

  goToEventDetailsComments(interestedEvent) {
    console.log(interestedEvent);
    this.router.navigate(['/comments', interestedEvent]);
  }
}
