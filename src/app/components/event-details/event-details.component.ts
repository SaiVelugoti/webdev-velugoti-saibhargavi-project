import {Component, OnInit} from '@angular/core';
import {EventSearchService} from '../../services/event-search.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../services/comment.service.client';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId: string;
  eventName: string;
  eventDetail: any;
  commentsExist: boolean;
  commentsFound: [{}];
  event: string;
  eventDetailsExist: boolean;
  noResults: boolean;
  eventsExist: boolean;
  searchTerm: string;
  searchResults: [{}];
  user: any;
  buttonValue: string;
  isSearching: boolean;
  infoMsg: string;
  infoFlag: boolean;
  isLoading: boolean;

  constructor(private eventSearchService: EventSearchService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.eventId = params['id'];
        // this.event = params['interestedEvent'];
        this.eventSearchService.getEventDetails(this.eventId)
          .subscribe((eventDetailed: any) => {
              if (eventDetailed !== undefined) {
                this.eventDetailsExist = true;
                this.eventDetail = eventDetailed;
                this.eventName = eventDetailed['title'];
                this.commentService.findAllCommentsForEvent(this.eventId)
                  .subscribe((comments: any) => {
                    this.isLoading = false;
                      if (comments[0] !== undefined) {
                        this.commentsExist = true;
                        this.commentsFound = comments[0].commentsOnEvent;
                      } else {
                        this.commentsExist = false;
                      }
                    }
                  );
              }
            }
          );
      });
  }

  searchForEvents(searchTerm) {
    this.eventSearchService.search(searchTerm)
      .subscribe((searchRes: any) => {
        if (searchRes['events']) {
          this.eventsExist = true;
          this.noResults = false;
          this.searchResults = searchRes.events.event;
          this.buttonValue = 'Add to Favorites';
          this.isSearching = false;
        } else {
          this.eventsExist = false;
          this.noResults = true;

        }

      });
  }
}
