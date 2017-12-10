import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  all_users: [{}];
  isEditing: boolean;
  currentUser: any;

  editingId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;

  successMsg: string;
  successFlag: boolean;

  constructor(private userService: UserService) {
    console.log('In manage user - ts - on init');
  }

  ngOnInit() {
    this.userService.findUsers().subscribe((userList: any) => {
      console.log(userList);
      this.all_users = userList;
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((user: any) => {
      window.location.reload();
    });
  }

  editUser(id) {
    this.userService.findUserById(id).subscribe((user: any) => {
      this.successFlag = false;
      this.isEditing = true;
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
      });
  }
}
