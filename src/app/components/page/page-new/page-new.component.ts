import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') pageCreateForm: NgForm;
  userId: string;
  wid: string;
  pageName: string;
  description: string;
  pages= [{}];
  errorFlag: boolean;
  errorMsg: string;
  newPageId: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.wid = params['wid'];
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
      }
    );
  }
  createPage() {
    if (this.pageCreateForm.value.pageName === '' && this.pageCreateForm.value.description === '') {
     this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
    } else if (this.pageCreateForm.value.pageName !== '' && this.pageCreateForm.value.description !== '') {
      this.newPageId = Math.random().toString();
      const page = {
        _id: this.newPageId,
        name: this.pageCreateForm.value.pageName,
        websiteId: this.wid,
        description: this.pageCreateForm.value.webDescription};
      this.pageService.createPage(this.wid, page);
      this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
    }else {
      this.errorMsg = 'Enter both name and description';
      this.errorFlag = true;
    }
  }
}
