import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // properties
  userId: string;
  user: any;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  successFlg: boolean;
  successMsg: string;
  role: string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
              private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.role = this.user['role'];

  }

  logout() {
    this.userService.logout()
      .subscribe((data: any) => this.router.navigate(['/login'])
      );
  }

  updateUser() {
    this.user = {
      _id: this.user._id,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      email: this.email
    };
    this.userService.updateUser(this.user._id, this.user)
      .subscribe((user: any) => {
      this.successMsg = 'Profile updated successfully';
      this.successFlg = true;
      });
  }
}
