import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  userId: string;
  wid: string;
  pid: string;
  pages = [{}];
  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.wid = params ['wid'];
          this.pid = params ['pid'];
          this.pageService.findPageByWebsiteId(this.wid).subscribe((pages: any) => {
            this.pages = pages;
          });
        }
      );
  }
}
