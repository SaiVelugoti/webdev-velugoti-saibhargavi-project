import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: string;
  wid: string;
  pid: string;
  widgets = [{}]
 widWidth: string;
  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.widgetService.findWidgetsByPageId(this.pid)
            .subscribe((list: any) => {
              this.widgets = list;
            });
        }
      );
  }
  cleanURL(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  assignWidth(width: string) {
    this.widWidth = width;
  }
}
