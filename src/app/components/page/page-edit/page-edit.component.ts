import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageEditForm: NgForm;
  uid: string;
  wid: string;
  pid: string;
  pageName: string;
  description: string;
  pages= [{}];
  editpage: {};
  errorFlag: boolean;
  errorMsg: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params ['pid'];
        this.pages = this.pageService.findPageByWebsiteId(this.wid);
        this.editpage = this.pageService.findPageById(this.pid);
        if (this.editpage != null) {
          this.pageName = this.editpage['name'];
          this.description = this.editpage['description'];
        }
      }
    );
  }
  updatePage() {
    if (this.pageName === '' || this.description === '') {
      this.errorMsg = 'Enter both name and description';
      this.errorFlag = true;
    } else {
      const page = {
        _id: this.pid,
        name: this.pageEditForm.value.pageName,
        websiteId: this.wid,
        description: this.pageEditForm.value.description
      };
      this.pageService.updatePage(this.pid, page);
      this.router.navigate(['/user/', this.uid, 'website', this.wid, 'page']);
    }
  }

  deletePage() {
    this.pageService.deletePage(this.pid);
    this.router.navigate(['/user/', this.uid, 'website', this.wid, 'page']);
  }
}

