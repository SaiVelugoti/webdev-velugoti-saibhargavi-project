import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {FlickrService} from '../../../../../services/flickr.service.client';

@Component({
  selector: 'app-flickr-search',
  templateUrl: './flickr-search.component.html',
  styleUrls: ['./flickr-search.component.css']
})
export class FlickrSearchComponent implements OnInit {

  photos: [{}];
  widget: any;
  userId: string;
  websiteId: string;
  widgetId: string;
  resultsFound: boolean;
  pageId: string;
  searchText: string;

  constructor(private widgetService: WidgetService,
              private flickrService: FlickrService,
              private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.resultsFound = false;
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.widgetId = params['widgetId'];
        this.pageId = params['pageId'];
      });
  }

  searchPhotos() {
    console.log(this.searchText);
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          this.resultsFound = true;
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    console.log('IN selectPhoto(pic)');
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      websiteId: this.websiteId,
      pageId: this.pageId,
      widgetType: 'IMAGE',
      url: url
    };

    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((widgetRet: any) => {
        console.log(widgetRet);
        console.log(widgetRet.length);
        const flickrWid = widgetRet[widgetRet.length - 1];
        console.log(flickrWid);
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId,
          'widget', flickrWid._id, 'IMAGE']);
      });

  }
}
