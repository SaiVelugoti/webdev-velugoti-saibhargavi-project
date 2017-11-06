import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import { environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {
  @ViewChild('f') imgForm: NgForm;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widtype: string;
  name: string;
  width: string;
  url: string;
  size: string;
  errorFlag: boolean;
  errMsg: string;
  widgetRet: {};
  widgetNew: {};
  widgetExists: boolean;
  // baseUrl = environment.baseUrl;

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
          this.widgetId = params['widgetId'];
          this.widtype = params['widtype'];
          // this.widgetRet = this.widgetService.findWidgetById(this.wgid);
          this.widgetService.findWidgetById(this.widgetId).subscribe((widget: any) => {
            this.widgetRet = widget;
            if (this.widgetRet !== null) {
            this.width = this.widgetRet['width'];
            this.url = this.widgetRet['url'];
            this.name = this.widgetRet['name'];
              this.widgetExists = true;
          } else {
            this.url = '';
            this.name = '';
            this.width = '';
              this.widgetExists = false;
          }
          });
        }
      );
  }

  createEditImage() {
alert('Im here');
    if (this.name === '' || this.width === '' || this.url === '') {
      this.errMsg = 'Enter all values'
      this.errorFlag = true;
    } else if (this.widgetRet !== null) {
      this.widgetExists = true;
    //   if (this.name !== this.widgetRet['name']) {
    //     // || this.width !== this.widgetRet['width'] || this.url !== this.widgetRet['url']) {
    //   const newId = Math.random().toString();
    //   this.widgetNew = {_id: newId, widgetType: 'IMAGE', pageId: this.pageId, width: this.imgForm.value.width,
    //     url: this.imgForm.value.url, name: this.imgForm.value.name};
    //   this.widgetService.createWidget(this.pageId, this.widgetNew)
    //     .subscribe((widget: any) => {
    //       this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    //     });
    // } else {
      this.widgetNew = {_id: this.widgetId, widgetType: 'IMAGE', pageId: this.pageId, width: this.imgForm.value.width,
        url: this.imgForm.value.url, name: this.imgForm.value.name};
      this.widgetService.updateWidget(this.widgetId, this.widgetNew)
        .subscribe((widget: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    } else {
      const newId = Math.random().toString();
      this.widgetExists = false;
      this.widgetNew = {
        _id: newId, widgetType: 'IMAGE', pageId: this.pageId, width: this.imgForm.value.width,
        url: this.imgForm.value.url, name: this.imgForm.value.name
      };
      this.widgetService.createWidget(this.pageId, this.widgetNew)
        .subscribe((widget: any) => {
          this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        });
    }
  //  this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widgets: any) => {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
