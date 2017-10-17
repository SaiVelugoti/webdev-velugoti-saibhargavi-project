import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') webEditForm: NgForm;
  uid: string;
  wid: string;
  websiteName: string;
  webDescription: string;
  websites= [{}];
  editweb: {};
  errorFlag: boolean;
  errorMsg: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params: any) => {
          this.uid = params['uid'];
          this.wid = params['wid'];
          this.websites = this.websiteService.findWebsitesByUser(this.uid);
          this.editweb = this.websiteService.findWebsiteById(this.wid);
          if (this.editweb != null) {
            this.websiteName = this.editweb['name'];
            this.webDescription = this.editweb['description'];
          }
        }
      );
  }
  updateWebsite() {
    if (this.websiteName === '' || this.webDescription === '') {
      this.errorMsg = 'Enter both name and description';
      this.errorFlag = true;
    } else {
      const web = {
        _id: this.wid,
        name: this.webEditForm.value.websiteName,
        developerId: this.uid,
        description: this.webEditForm.value.webDescription
      };
      this.websiteService.updateWebsite(this.wid, web);
      this.router.navigate(['/user/', this.uid, 'website']);
    }
  }

  deleteWebsite() {
    this.websiteService.deleteWebsite(this.wid);
    this.router.navigate(['/user/', this.uid, 'website']);
  }
}
