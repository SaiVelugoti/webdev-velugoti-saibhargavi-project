import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  all_users: [{}];
  isEditing: boolean;
  currentUser: any;
  newusername: string;

  editingId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
  verifyPwd: string;

  successMsg: string;
  successFlag: boolean;
  errMsg: string;
  errFlag: boolean;
  isCreatingNewUser: boolean;
  user: any;

  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router) {
    console.log('In manage user - ts - on init');
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userService.findUsers().subscribe((userList: any) => {
      this.all_users = userList;
      this.all_users.forEach((user, index) => {
        if (user['_id'] === this.user['_id']) {
          this.all_users.splice(index, 1);
        }
      });
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((user: any) => {
      this.userService.findUsers().subscribe((userList: any) => {
        this.all_users = userList;
      });
    });
  }

  editUser(id) {
    this.userService.findUserById(id).subscribe((user: any) => {
      this.successFlag = false;
      this.isEditing = true;
      this.isCreatingNewUser = false
      this.currentUser = user;
      this.username = user['username'];
      this.firstName = user['firstName'];
      this.lastName = user['lastName'];
      this.email = user['email'];
      this.role = user['role'];
    });
  }

  updateUser() {
    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role
    };
    this.userService.updateUser(this.currentUser['_id'], user)
      .subscribe((result: any) => {
        this.successFlag = true;
        this.successMsg = 'User updated successfully';
        this.isEditing = false;
        this.userService.findUsers().subscribe((userList: any) => {
          this.all_users = userList;
          this.all_users.forEach((user1, index) => {
            if (user1['_id'] === this.user['_id']) {
              this.all_users.splice(index, 1);
            }
          });
        });
      });
  }

  onCreate() {
    this.isEditing = false;
    this.isCreatingNewUser = true;
    this.successFlag = false;
    this.firstName = '';
    this.lastName = '';
    this.password = '';
    this.verifyPwd = '';
    this.email = '';
    this.role = '';
    this.newusername = '';
  }

  logout() {
    this.userService.logout().subscribe((user: any) => {
      this.router.navigate(['/login']);
    });
  }

  createNewUser() {
    if (this.newusername === undefined || this.newusername === ''
      || this.password === undefined || this.password === ''
      || this.verifyPwd === undefined || this.verifyPwd === '') {
      this.errMsg = 'Username, password and verify password fields are mandatory';
      this.errFlag = true;
    } else if (this.password !== this.verifyPwd) {
        this.errMsg = 'Password and verify password fields do not match';
        this.errFlag = true;
      } else {
      this.errFlag = false;
      const user = {
        username: this.newusername,
        password: this.password,
        firstName: this.firstName || '',
        lastName: this.lastName || '',
        email: this.email || '',
        role: this.role || 'USER'
      }
      this.userService.createUser(user)
        .subscribe((user1: any) => {
          console.log('creating new user');
          this.successFlag = true;
          this.successMsg = 'Created user successfully!';
          this.userService.findUsers().subscribe((userList: any) => {
            this.all_users = userList;
            this.all_users.forEach((user2, index) => {
              if (user2['_id'] === this.user['_id']) {
                this.all_users.splice(index, 1);
              }
            });
          });
          this.isCreatingNewUser = false;
          this.errFlag = false;
        });
    }
  }
}
