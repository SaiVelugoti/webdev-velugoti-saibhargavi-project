import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') webCreateForm: NgForm;
  uid: string;
  wid: string;
  websiteName: string;
  webDescription: string;
  websites= [{}];
  editweb: {};
  errorFlag: boolean;
  errorMsg: string;
newWebId: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }
  @ViewChild('f') webeditForm: NgForm;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
      }
    );
  }
  createWebsite() {
    if (this.webCreateForm.value.websiteName === '' && this.webCreateForm.value.webDescription === '') {
      this.router.navigate(['/user/', this.uid, 'website']);
    } else if (this.webCreateForm.value.websiteName !== '' && this.webCreateForm.value.webDescription !== '') {
     this.newWebId = Math.random().toString();
      const web = {
        _id: this.newWebId,
        name: this.webCreateForm.value.websiteName,
        developerId: this.uid,
        description: this.webCreateForm.value.webDescription};
        this.websiteService.createWebsite(this.uid, web);
      this.router.navigate(['/user/', this.uid, 'website']);
      }else {
        this.errorMsg = 'Enter both name and description';
      this.errorFlag = true;
    }
    }
}
