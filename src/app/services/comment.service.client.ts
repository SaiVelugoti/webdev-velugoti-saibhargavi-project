import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';

@Injectable()
export class CommentService {

  // Asgn 6
  // options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;

  constructor(private _http: Http, private sharedService: SharedService, private router: Router) {
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

  deleteComment(eventId, commentId) {
    const eventComment = {
      eventId: eventId,
      commentId: commentId
    };
    console.log(eventId, commentId);
    return this._http.post(this.baseUrl + '/api/deleteCommentToEvent', eventComment)
      .map((res: Response) => {
        return res.json();
      });
  }


  findAllCommentsForEvent(eventId) {
    const url = this.baseUrl + '/api/findAllCommentsForEvent/' + eventId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  addCommentToEvent(event, comment) {
    const eventComment = {
      eventId: event,
      comment: comment
    };
    return this._http.post(this.baseUrl + '/api/addCommentToEvent', eventComment)
      .map((res: Response) => {
        return res.json();
      });
  }

  getEventName(eventId) {
    const url = this.baseUrl + '/api/getEventName/' + eventId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

}
