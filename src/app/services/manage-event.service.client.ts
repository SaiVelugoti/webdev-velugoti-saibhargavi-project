import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';

@Injectable()
export class ManageEventService {

  baseUrl = environment.baseUrl;

  constructor(private _http: Http,
              private sharedService: SharedService,
              private router: Router) {
  }

  findEventsCreated(userId) {
    const url = this.baseUrl + '/api/findEventsCreated/' + userId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findEventsCreatedByOthers(userId) {
    const url = this.baseUrl + '/api/findEventsCreatedByOthers/' + userId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }
  addEvent(event) {
    const eventBody = {
      eventNew: event
    };
    return this._http.post(this.baseUrl + '/api/addNewEvent', eventBody)
      .map((res: Response) => {
        return res.json();
      });
  }
  updateNewEvent(id) {
    const reqBody = {
      eventId: id
    };
    console.log('---- manage - evnet - client', reqBody);
    return this._http.post(this.baseUrl + '/api/updateNewEvent', reqBody)
      .map((res: Response) => {
        return res.json();
      });
  }


  modifyComment(eventId, commentId, commentText) {
    const eventComment = {
      eventId: eventId,
      commentId: commentId,
      commentText: commentText
    };
    return this._http.post(this.baseUrl + '/api/modifyCommentToEvent', eventComment)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteEvent(eventId) {
    const url = this.baseUrl + '/api/deleteEvent/' + eventId;
    return this._http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }


  findAllCommentsForEvent(eventId) {
    const url = this.baseUrl + '/api/findAllCommentsForEvent/' + eventId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }


  getEventName(eventId) {
    const url = this.baseUrl + '/api/getEventName/' + eventId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

}
