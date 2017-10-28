import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageEditForm: NgForm;
  userId: string;
  wid: string;
  pid: string;
  pageName: string;
  description: string;
  pages= [{}];
  // editpage: {};
  errorFlag: boolean;
  errorMsg: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageService: PageService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.wid = params['wid'];
        this.pid = params ['pid'];
        // this.pageService.findPageByWebsiteId(this.wid);
        this.pageService.findPageById(this.pid)
          .subscribe((editpage: any) => {
            if (editpage != null) {
              this.pageName = editpage['name'];
              this.description = editpage['description'];
            }
          });
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
      this.pageService.updatePage(this.pid, page)
        .subscribe((pageVal: any) => {
          this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
        });
    }
  }
    deletePage() {
      this.pageService.deletePage(this.pid)
        .subscribe((page: any) => {
          this.router.navigate(['/user/', this.userId, 'website', this.wid, 'page']);
        });
    }
  }
