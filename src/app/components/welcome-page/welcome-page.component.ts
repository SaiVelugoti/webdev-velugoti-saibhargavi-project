import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EventSearchService} from '../../services/event-search.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  @ViewChild('f') welcomeForm: NgForm;

  // properties
  noResults: boolean;
  eventsExist: boolean;
  searchTerm: string;
  searchResults: [{}];

  constructor(private eventSearchService: EventSearchService,
              private router: Router) {
  }

  ngOnInit() {
    this.noResults = false;
    this.eventsExist = false;
  }

  search() {
    this.searchTerm = this.welcomeForm.value.searchTerm;
    this.eventSearchService.search(this.searchTerm)
      .subscribe((searchRes: any) => {
        console.log('Hey ----> ');
        console.log(searchRes.events.event.length);
        if (searchRes['events']) {
          this.eventsExist = true;
          this.noResults = false;
          this.searchResults = searchRes.events.event;
        } else {
          this.eventsExist = false;
          this.noResults = true;

        }

      });
  }

  searchForEvents(searchFor) {

  }

  getDetails(id) {
    this.router.navigate(['/eventDetails', id]);
  }

}
