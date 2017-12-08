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
  inputTxt: string;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private  router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.title = 'This is Login Page';
    this.disabledFlag = true;
  }

  login() {
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

  // login() {
  //   this.username = this.loginForm.value.username;
  //   this.password = this.loginForm.value.password;
  //
  //   this.userService.findUserByCredentials(this.username, this.password)
  //     .subscribe((user: any) => {
  //       if ((user !== null)) {
  //         this.router.navigate(['/user/', user._id]);
  //       } else {
  //         this.errorMsg = 'Invalid username or password !';
  //         this.errorFlag = true;
  //       }
  //     });
  // }
}
