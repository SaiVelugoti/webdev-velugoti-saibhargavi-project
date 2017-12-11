import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSearchComponent } from './event-search.component';

describe('WelcomePageComponent', () => {
  let component: EventSearchComponent;
  let fixture: ComponentFixture<EventSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
