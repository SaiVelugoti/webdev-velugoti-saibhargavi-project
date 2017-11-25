import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widgets = [{}];
  newWid: any;
  widgetNew: any;
  newWidget: any;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
          this.widgetId = params['widgetId'];
          this.newWid = Math.random();
        });
  }

  createNewIm() {
    this.widgetNew = {
      widgetType: 'IMAGE', pageId: this.pageId
    };
    this.widgetService.createDummyWidget(this.pageId, this.widgetNew)
      .subscribe((widget: any) => {
        console.log(widget['_id'])
        this.newWidget = widget['_id'];

        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.newWidget, 'IMAGE']);
      });
  }
}
