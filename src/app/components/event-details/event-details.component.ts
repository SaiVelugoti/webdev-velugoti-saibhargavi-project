import {Component, OnInit} from '@angular/core';
import {EventSearchService} from '../../services/event-search.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId: string;
  eventDetail: any;

  constructor(private eventService: EventSearchService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.eventId = params['id'];
        this.eventService.getEventDetails(this.eventId)
          .subscribe((eventDetailed: any) => {
              if (eventDetailed) {
                this.eventDetail = eventDetailed;
              }
            }
          );
      });
  }
}
