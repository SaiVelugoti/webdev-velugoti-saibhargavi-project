import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
// properties
  title: string;
  disabledFlag: boolean;
  inputTxt: string;
  username: string;
  password: string;
  verifyPassword: string;
  errorFlag: boolean;
  newUserId: string;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private  router: Router) {
  }

  ngOnInit() {
    this.errorFlag = false;
    this.username = '';
    this.password = '';
    this.verifyPassword = '';
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    const user = this.userService.findUserByUsername(this.username);

    if (user != null) {
      this.errorMsg = 'User already exists!';
      this.errorFlag = true;
    } else if (this.verifyPassword === this.password) {
      this.newUserId = Math.random().toString();
      const newUser = {
        _id: this.newUserId,
        username: this.username,
        password: this.password,
        firstName: '',
        lastName: ''
      };
      this.userService.createUser(newUser);
      this.router.navigate(['/user/', this.newUserId]);
    }
  }
}
