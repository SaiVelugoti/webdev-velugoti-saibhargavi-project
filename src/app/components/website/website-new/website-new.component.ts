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
  userId: string;
  wid: string;
  websiteName: string;
  webDescription: string;
  websites= [{}];
  errorFlag: boolean;
  errorMsg: string;
newWebId: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }
  @ViewChild('f') webeditForm: NgForm;
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      //  this.websites = this.websiteService.findWebsitesByUser(this.userId);
      }
    );
  }

  // createWebsite() {
  //   this.webname = this.submitForm.value.webname;
  //   this.description = this.submitForm.value.description;
  //   const tempSite = {_id: '000', name: this.webname, developerId: this.userId, description: this.description};
  //   this.websiteService.createWebsite(this.userId, tempSite).subscribe((site: any) => {
  //     this.router.navigate(['/user', this.userId, 'website']);
  //   });
  // }

  createWebsite() {
    if (this.webCreateForm.value.websiteName === '' && this.webCreateForm.value.webDescription === '') {
      this.router.navigate(['/user/', this.userId, 'website']);
    } else if (this.webCreateForm.value.websiteName !== '' && this.webCreateForm.value.webDescription !== '') {
     this.newWebId = Math.random().toString();
      const web = {
        _id: this.newWebId,
        name: this.webCreateForm.value.websiteName,
        developerId: this.userId,
        description: this.webCreateForm.value.webDescription};
        this.websiteService.createWebsite(this.userId, web).subscribe((site: any) => {
      this.router.navigate(['/user/', this.userId, 'website']);
      });
    } else {
        this.errorMsg = 'Enter both name and description';
      this.errorFlag = true;
    }
    }
}
