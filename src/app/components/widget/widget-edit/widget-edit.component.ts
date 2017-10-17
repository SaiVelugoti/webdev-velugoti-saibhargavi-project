import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widtype: string;
  widget: {};
  widgetExists: boolean;
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.wgid = params['wgid'];
          this.widtype = params['widtype'];
          this.widget = this.widgetService.findWidgetById(this.wgid);
          if (this.widget !== null) {
            this.widgetExists = true;
          }
        }
      );
  }

  updateWidget() {
    this.widgetService.updateWidget(this.wgid, this.widget);
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid);
    this.router.navigate(['/user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
  }
}
