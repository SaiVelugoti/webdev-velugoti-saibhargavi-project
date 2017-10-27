import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {Router } from '@angular/router';

@Injectable()
export class WebsiteService {
  constructor(private _http: Http) {
  }
  baseUrl = environment.baseUrl;
  api = {
    'createWebsite': this.createWebsite,
    'findWebsitesByUser': this.findWebsitesByUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'deleteWebsite': this.deleteWebsite
  };

  createWebsite(userId, website) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this._http.post(url, website).map((response: Response) => {
      return response.json();
    });
  }
  findWebsitesByUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    alert('hey ');
    alert(url);

    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(websiteId) {
    const url = this.baseUrl + '/api/' + websiteId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateWebsite(websiteId, website)  {
    const url = this.baseUrl + websiteId;
    return this._http.put(url, website).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(websiteId) {
    const url = this.baseUrl + websiteId;
    return this._http.delete(url).map((response: Response) => {
      return response.json();
    });
  }
}
