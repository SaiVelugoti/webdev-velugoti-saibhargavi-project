import {Injectable} from '@angular/core';

@Injectable()
export class PageService {

  constructor()   {   }
  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '890', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '890', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '567', 'description': 'Lorem' }
  ];
  api = {
    'createPage': this.createPage,
    'findPageByWebsiteId': this.findPageByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updatePage,
    'deletePage': this.deletePage
  };
  createPage(websiteId, page) {
    page.websiteID = websiteId;
    this.pages.push(page);
  }

  findPageByWebsiteId(websiteId) {
    const pagesByThisWebsiteId = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pagesByThisWebsiteId.push(this.pages[x]);
      }
    }
    return pagesByThisWebsiteId;
  }

  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
    return null;
  }

  updatePage(pageId, page)  {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x]._id = page;
      }
    }
  }

  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }
}
