import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  userId: string;
  wid: string;
  pid: string;
  wgid: string;
  widtype: string;
  widText: string;
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
          // this.widgetRet = this.widgetService.findWidgetById(this.wgid);
          this.widgetService.findWidgetById(this.wgid).subscribe((widget: any) => {
            this.widgetRet = widget;
            if (this.widgetRet !== null) {
              this.widText = this.widgetRet['text'];
              this.size = this.widgetRet['size'];
            } else {
              this.widText = '';
              this.size = '';
            }
          });
        }
      );
  }

  createEditHeader() {
    if (this.widText === '' || this.size === '') {
      this.errMsg = 'Enter all values'
      this.errorFlag = true;
    } else if (this.widgetRet !== null) {
      if (this.widText !== this.widgetRet['text'] || this.size !== this.widgetRet['size']) {
          const newId = Math.random().toString();
          this.widgetNew = {_id: newId, widgetType: 'HEADING', pageId: this.pid, size: this.size, text: this.widText};
          this.widgetService.createWidget(this.pid, this.widgetNew)
            .subscribe((widget: any) => {
              this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
            });
      } else {
        this.widgetNew = {_id: this.wid, widgetType: 'HEADING', pageId: this.pid, size: this.size, text: this.widText };
        this.widgetService.updateWidget(this.wid, this.widgetNew)
          .subscribe((widgets: any) => {
            this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
          });
      }} else {
      const newId = Math.random().toString();
      this.widgetNew = {_id: newId, widgetType: 'HEADING', pageId: this.pid, size: this.size, text: this.widText};
      this.widgetService.createWidget(this.pid, this.widgetNew)
        .subscribe((widgets: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
        });
    }
      this.router.navigate(['/user', this.userId, 'website', this.wid, 'page', this.pid, 'widget']);
    }
}
