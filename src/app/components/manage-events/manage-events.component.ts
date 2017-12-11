import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ManageEventService} from '../../services/manage-event.service.client';

@Component({
  selector: 'app-manage-events',
  templateUrl: './manage-events.component.html',
  styleUrls: ['./manage-events.component.css']
})
export class ManageEventsComponent implements OnInit {

  eventsCreated: [{}];
  eventsCreatedbyOthers: [{}];
  user: any;
  userCreatedEvents: boolean;
  otherUserCreatedEvents: boolean

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private sharedService: SharedService,
              private manageEventService: ManageEventService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.manageEventService.findEventsCreated(this.user['_id']).subscribe((eventsCreated: any) => {
      if (eventsCreated.length > 0) {
        this.userCreatedEvents = true;
        this.eventsCreated = eventsCreated;
      }
    });
    this.manageEventService.findEventsCreatedByOthers(this.user['_id']).subscribe((eventsCreated: any) => {
      if (eventsCreated.length > 0) {
        this.otherUserCreatedEvents = true;
        this.eventsCreatedbyOthers = eventsCreated;
      }
    });
  }

  deleteEvent(eventId) {
    this.user = this.sharedService.user;
    this.manageEventService.deleteEvent(eventId).subscribe((resp: any) => {
      this.manageEventService.findEventsCreated(this.user['_id']).subscribe((eventsCreated: any) => {
        this.eventsCreated = eventsCreated;
      });
    });
  }

  goToEventDetails(eventId) {
    this.router.navigate(['/detailsManager', eventId]);
  }

}
