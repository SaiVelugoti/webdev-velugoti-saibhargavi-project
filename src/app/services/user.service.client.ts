import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private _http: Http) {}
  baseUrl = environment.baseUrl;

  findUsers() {
    const url = this.baseUrl + '/api/users/';
    return this._http.get(url).map((response: Response) => {});
  }
  // users = [
  //   {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
  //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
  //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  // ];
  // api = {
  //   'createUser': this.createUser,
  //   'findUserById': this.findUserById,
  //   'findUserByUsername': this.findUserByUsername,
  //   'updateUser': this.updateUser,
  //   'deleteUser': this.deleteUser,
  //   'findUserByCredentials' : this.findUserByCredentials
  // };

  // app.post("/api/user", createUser);
  // app.get("/api/user?username=username", findUserByUsername);
  // app.get("/api/user?username=username&password=password", findUserByCredentials);
  // app.get("/api/user", findUsers);
  // app.get("/api/user/:userId", findUserById);
  // app.put("/api/user/:userId", updateUser);
  // app.delete("/api/user/:userId", deleteUser);

  createUser(user: any) {
    const url = this.baseUrl + '/api/user/';
    return this._http.post(url, user)
      .map((response: Response) => {
      return response.json();
      });
    // this.users.push(user);
    // return user;
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
//    alert(url);
    return this._http.get(url)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     return this.users[x];
    //   }
    // }
    // return null;
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this._http.get(url)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username) {
    //     return this.users[x];
    //   }
    // }
    // return null;
  }

  updateUser(userId, user) {
    user.id = userId;
    const url = this.baseUrl + '/api/user/' + userId;
    return this._http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users[x] = user;
    //   }
    // }
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this._http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x]._id === userId) {
    //     this.users.splice(x, 1);
    //   }
    // }
  }
  findUserByCredentials(username, password) {

    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this._http.get(url)
      .map((response: Response) => {
        return response.json();
      });

    // for (let x = 0; x < this.users.length; x++) {
    //   if (this.users[x].username === username && this.users[x].password === password) {
    //     return this.users[x];
    //   }
    // }
    // return null;
  }
}
