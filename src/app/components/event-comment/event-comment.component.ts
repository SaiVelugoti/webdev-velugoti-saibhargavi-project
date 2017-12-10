import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service.client';
import {CommentService} from '../../services/comment.service.client';
import {ActivatedRoute} from '@angular/router';
import {EventSearchService} from "../../services/event-search.service.client";

@Component({
  selector: 'app-event-comment',
  templateUrl: './event-comment.component.html',
  styleUrls: ['./event-comment.component.css']
})
export class EventCommentComponent implements OnInit {

  event: string;
  user: any;
  commentsExist: boolean;
  commentsFound: [{}];
  addingNewComment: boolean;
  newComment: string;
  errorFlag: boolean;
  errorMsg: string;

  eventId: string;
  eventDetail: any;

  eventDetailsExist: boolean;
  noResults: boolean;
  eventsExist: boolean;
  searchTerm: string;
  searchResults: [{}];
  buttonValue: string;
  isSearching: boolean;
  infoMsg: string;
  infoFlag: boolean;
  eventName: string;

  constructor(private sharedService: SharedService,
              private commentService: CommentService,
              private activatedRoute: ActivatedRoute,
              private eventSearchService: EventSearchService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.event = params['interestedEvent'];

        this.eventSearchService.getEventDetails(this.event)
          .subscribe((eventDetailed: any) => {
              if (eventDetailed !== undefined) {
                this.eventDetailsExist = true;
                this.eventDetail = eventDetailed;
              }
            }
          );
        // this.commentService.getEventName(this.event)
        //   .subscribe((event: any) => {
        //     this.eventDetailsExist = true;
        //     this.eventName = event['eventName'];
        //   });

        console.log(this.event);
        this.commentService.findAllCommentsForEvent(this.event)
          .subscribe((comments: any) => {
              if (comments) {
                this.commentsFound = comments[0].commentsOnEvent;
                if (this.commentsFound.length > 0) {
                  this.commentsExist = true;
                }
              }
            }
          );
      });
  }


  addNewComment() {
    this.addingNewComment = true;
  }

  addCommentToEvent() {
    if (this.newComment === '' || this.newComment === undefined) {
      this.errorFlag = true;
      this.errorMsg = 'Please enter your comments';
    } else {
      const commentToAdd = {
        userId: this.user['_id'],
        username: this.user['username'],
        comment: this.newComment
      }
      console.log(commentToAdd);
      this.commentService.addCommentToEvent(this.event, commentToAdd)
        .subscribe((resp: any) => {
          this.addingNewComment = false;
          this.newComment = '';
          this.commentService.findAllCommentsForEvent(this.event)
            .subscribe((comments: any) => {
              if (comments[0] !== undefined) {
                this.commentsExist = true;
                this.commentsFound = comments[0].commentsOnEvent;
              }
            });
        });
    }
  }

  getEventName(id) {
    this.commentService.getEventName(id)
      .subscribe((event: any) => {
        return event['eventName'];
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
