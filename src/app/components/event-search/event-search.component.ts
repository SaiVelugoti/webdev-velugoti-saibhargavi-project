import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EventSearchService} from '../../services/event-search.service.client';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  @ViewChild('f') welcomeForm: NgForm;

  // properties
  noResults: boolean;
  eventsExist: boolean;
  searchTerm: string;
  searchResults: [{}];
  user: any;
  buttonValue: string;
  isSearching: boolean;
  infoMsg: string;
  infoFlag: boolean;
  userExists: boolean;

  constructor(private eventSearchService: EventSearchService,
              private router: Router,
              private userService: UserService,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['_id'] !== undefined) {
      this.userExists = true;
    }
    this.noResults = false;
    this.eventsExist = false;
    this.buttonValue = 'Add to Favorites';
    this.isSearching = false;
  }

  search() {
    this.isSearching = true;
    this.searchTerm = this.welcomeForm.value.searchTerm;
    this.eventSearchService.search(this.searchTerm)
      .subscribe((searchRes: any) => {
        if (searchRes['events']) {
          this.eventsExist = true;
          this.noResults = false;
          this.searchResults = searchRes.events.event;
          this.buttonValue = 'Add to Favorites';
          this.isSearching = false;
        } else {
          this.eventsExist = false;
          this.noResults = true;

        }

      });
  }

  // searchForEvents(searchTerm) {
  //   this.eventSearchService.search(searchTerm)
  //     .subscribe((searchRes: any) => {
  //       if (searchRes['events']) {
  //         this.eventsExist = true;
  //         this.noResults = false;
  //         this.searchResults = searchRes.events.event;
  //         this.buttonValue = 'Add to Favorites';
  //         this.isSearching = false;
  //       } else {
  //         this.eventsExist = false;
  //         this.noResults = true;
  //
  //       }
  //
  //     });
  // }

  getDetails(id) {
    this.router.navigate(['/eventDetails', id]);
  }

//
//   this.userService.register(this.username, this.password, this.role)
// .subscribe((data: any) => {
//   this.router.navigate(['/profile']);
// },
// (error: any) => {
//   this.error = error._body;
// });

  addTofavorites(eventId, eventName, event) {
    if (this.user['_id'] === undefined || this.user['_id'] === '') {
      this.infoMsg = 'Login to add to favorites';
      this.infoFlag = true;
    } else {
      this.userService.addToFavorites(this.user['_id'], eventId, eventName)
        .subscribe((data: any) => {
          console.log('Index of eventName is');
          const target = event.target || event.srcElement || event.currentTarget;
          const idAttr = target.attributes.id.nodeValue;
          if (idAttr === eventId) {
            target.innerText = 'Added to favorites';
          }
          // console.log(this.searchResults.re);
          // .findIndex(eventName));
        });
    }
  }

  // removeFromFavorites(eventName) {
  //   this.userService.removeFromFavorites(this.user['_id'], eventName)
  //     .subscribe((data: any) => {
  //     });
  // }
}
