import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FlickrService {
  key = '5d9596b602c29a4986e327ebe8a77ed8';
  secret = '46d8cf97d7b21bff';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_ke=API_KEY&text = TEXT';


  constructor(private _http: Http) {
  }


  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    console.log('IN flickr.service.client.ts -> searchPhotos()');
    return this._http.get(url);
  }
}
