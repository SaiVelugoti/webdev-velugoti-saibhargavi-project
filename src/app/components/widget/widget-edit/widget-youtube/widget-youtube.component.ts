import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') ytForm: NgForm;

  userId: string;
  wid: string;
  pid: string;
  wgid: string;
  widtype: string;
  name: string;
  width: string;
  url: string;
  size: string;
  errorFlag: boolean;
  errMsg: string;
  widgetRet: {};
  widgetNew: {};

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.wgid = params['wgid'];
          this.widtype = params['widtype'];
          this.widgetRet = this.widgetService.findWidgetById(this.wgid);
          if (this.widgetRet !== null) {
            this.url = this.widgetRet['url'];
            this.name = this.widgetRet['name'];
            this.width = this.widgetRet['width'];
          } else {
            this.url = '';
            this.name = '';
            this.width = '';
          }
        }
      );
  }

  createEditYoutube() {

    if (this.name === '' || this.width === '' || this.url === '') {
      this.errMsg = 'Enter all values'
      this.errorFlag = true;
    } else if (this.widgetRet !== null) {
      if (this.name !== this.widgetRet['name'] || this.width !== this.widgetRet['width'] || this.url !== this.widgetRet['url']) {
        const newId = Math.random().toString();
      this.widgetNew = {_id: newId, widgetType: 'YOUTUBE', pageId: this.pid, width: this.ytForm.value.width,
        url: this.ytForm.value.url, name: this.ytForm.value.name};
      this.widgetService.createWidget(this.pid, this.widgetNew);
    } else {
      this.widgetNew = {_id: this.wid, widgetType: 'YOUTUBE', pageId: this.pid, width: this.ytForm.value.width,
        url: this.ytForm.value.url, name: this.ytForm.value.name};
      this.widgetService.updateWidget(this.wid, this.widgetNew);
    }} else {
      const newId = Math.random().toString();
      this.widgetNew = {_id: newId, widgetType: 'YOUTUBE', pageId: this.pid, width: this.ytForm.value.width,
        url: this.ytForm.value.url, name: this.ytForm.value.name};
      this.widgetService.createWidget(this.pid, this.widgetNew);
    }
    this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
  }
}
