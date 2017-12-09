import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  title: string;
  disabledFlag: boolean;
  username: string;
  password: string;
  errorFlag: boolean;
  successMsg: string;
  successFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private  router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.successFlag = false;
    this.title = 'This is Login Page';
    this.disabledFlag = true;
  }

  login() {
    this.successFlag = false;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          // this.router.navigate(['/user', data._id]);
          this.sharedService.user = data;
          console.log('Login component TS');
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Invalid username or password !';
          console.log(error);
        }
      );
  }

  deleteAllUsers() {
    this.userService.deleteAllUsers()
      .subscribe((status: any) => {
        this.successFlag = true;
        this.successMsg = 'All users deleted successfully';
        this.errorFlag = false;
      });
  }
}
