import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  all_users: [{}];
  editingUser: boolean;
  currentUser: any;


    username: string;
    firstName: string;
    lastName: string;

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
      this.currentUser = user;
      console.log(user);
      this.username = user['username'];
      this.editingUser = true;
    });
  }
}
