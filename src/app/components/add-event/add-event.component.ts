import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {SharedService} from '../../services/shared.service.client';
import {ManageEventService} from '../../services/manage-event.service.client';
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @ViewChild('f') eventForm: NgForm;
  errorFlag: boolean;
  errMsg: string;

  baseUrl = environment.baseUrl;

  user: any;
  description: string;
  eventLocation: string;
  imgSrc: string;
  eventUrl: string;
  eventName: string;
  successFlag: boolean;
  successMsg: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private manageEventService: ManageEventService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.eventName = '';
    this.description = '';
    this.eventLocation = '';
    this.imgSrc = '';
    this.eventUrl = '';
    this.user = this.sharedService.user;

    this.activatedRoute.params
      .subscribe((params: any) => {
        if (params['url'] !== undefined) {
          this.imgSrc = params['url'];
        }
      });
  }

  flickrSearch() {
    this.router.navigate(['/flickrSearch']);
  }

  addEvent() {
    if (this.eventName === '') {
      this.errMsg = 'Enter Name of the event'
      this.errorFlag = true;
    } else if (this.description === '' ||
      this.eventLocation === '') {
      this.errMsg = 'Enter both description and location';
      this.errorFlag = true;
    }
    const newEvent = {
      title: this.eventForm.value.eventName,
      description: this.eventForm.value.description,
      address: this.eventForm.value.eventLocation,
      imgSrc: this.eventForm.value.imgSrc,
      url: this.eventForm.value.eventUrl,
      createdBy: this.user['_id']
    };
    console.log(newEvent);
    this.manageEventService.addEvent(newEvent)
      .subscribe((event: any) => {
        this.successFlag = true;
        this.successMsg = 'Event created successfully';
        this.eventForm.reset();
        const newEventId = event['_id'];
        this.manageEventService.updateNewEvent(newEventId)
          .subscribe((event1: any) => {
          });
      });
  }
  logout() {
    this.userService.logout().subscribe((user: any) => {
      this.router.navigate(['/login']);
    });
  }
}
