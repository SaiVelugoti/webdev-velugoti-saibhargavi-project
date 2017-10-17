import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  uid: string;
  wid: string;
  pid: string;
  wgid: string;
  widgets = [{}];
  newWid;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
          this.newWid = Math.random();
        }
      );
  }
}
