import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// import {keys} from '../../../keys';
@Injectable()
export class EventSearchService {

  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;
  apiKey = 'MkD6G4ptdWk8dbPr';

  proxyURL = 'https://cors-anywhere.herokuapp.com/';
  apiURL = 'http://api.eventful.com/json/events/search/?location=VALUE&app_key=API_KEY&date=Future&page_size=50';
  apiDetailURL = 'http://api.eventful.com/json/events/get?id=VALUE&app_key=API_KEY';

  constructor(private _http: Http, private router: Router) {
  }

  search(searchTerm) {
    const url =
      this.proxyURL +
      this.apiURL.replace('VALUE', searchTerm).replace('API_KEY', this.apiKey);

    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  getEventDetails(id) {
    const url =
      this.proxyURL +
      this.apiDetailURL.replace('VALUE', id).replace('API_KEY', this.apiKey);
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }


}

// http://api.eventful.com/json/events/search/?location=San Diego&app_key=MkD6G4ptdWk8dbPr
