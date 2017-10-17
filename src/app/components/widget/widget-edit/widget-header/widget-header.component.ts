import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  uid: string;
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
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.wgid = params['wgid'];
          this.widtype = params['widtype'];
          this.widgetRet = this.widgetService.findWidgetById(this.wgid);
          this.widText = this.widgetRet['text'];
          this.size = this.widgetRet['size'];
        }
      );
  }

  createEditHeader() {

    if (this.widText === '' || this.size === '') {
      this.errMsg = 'Enter all values'
      this.errorFlag = true;
    } else if (this.widText !== this.widgetRet['text'] || this.size !== this.widgetRet['size']) {
      const newId = Math.random().toString();
       this.widgetNew = {_id: newId, widgetType: this.widtype, pageId: this.pid, size: this.size, text: this.widText};
        this.widgetService.createWidget(this.pid, this.widgetNew);
      } else {
        this.widgetNew = {_id: this.wid, widgetType: this.widtype, pageId: this.pid, size: this.size, text: this.widText };
        this.widgetService.updateWidget(this.wid, this.widgetNew);
      }
      // console.log(this.aNewWidget);
      this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    }
}
