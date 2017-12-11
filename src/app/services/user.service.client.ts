import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service.client';

@Injectable()
export class UserService {

  // Asgn 6
  options: RequestOptions = new RequestOptions();
  baseUrl = environment.baseUrl;

  constructor(private _http: Http, private sharedService: SharedService, private router: Router) {
  }

  findEventsInterested(userId) {
    const url = this.baseUrl + '/api/getInterestedEvents/' + userId;
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  addToFavorites(userId, eventId, eventName) {
    const url = this.baseUrl + '/api/addToFavorites/';
    const body = {
      userId: userId,
      eventId: eventId,
      eventName: eventName
    };
    return this._http.post(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }


  removeFromFavorites(userId, eventName) {
    const url = this.baseUrl + '/api/removeFromFavorites/';
    const body = {
      userId: userId,
      eventName: eventName
    };
    return this._http.post(url, body)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUsers() {
    const url = this.baseUrl + '/api/users/';
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this._http.post(this.baseUrl + '/api/login', body, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map((res: Response) => {
        const data = res;
      });
  }

  register(username: String, password: String, role: String) {
    this.options.withCredentials = true;
    const user = {
      username: username,
      password: password,
      role: role
    };
    return this._http.post(this.baseUrl + '/api/register', user, this.options)
      .map((res: Response) => {
        const data = res.json();
        return data;
      });
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.sharedService.user = '';
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  createUser(user: any) {
    const url = this.baseUrl + '/api/user/';
    console.log('creating new user-> user service client');
    return this._http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: string) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this._http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: string) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this._http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId, user) {
    user.id = userId;
    const url = this.baseUrl + '/api/user/' + userId;
    return this._http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this._http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this._http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteAllUsers() {
    const url = this.baseUrl + '/api/deleteAllUsers';
    return this._http.delete(url)
      .map((response: Response) => {
        return response.status;
      });
  }

  findUsersFollowing(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/dashboard/following';
    return this._http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserFollowedBy(userId) {
    const url = this.baseUrl + '/api/user/' + userId + '/dashboard/followedBy';
    return this._http.get(url).map((respoonse: Response) => {
      return respoonse.json();
    });
  }

  addUserToFollow(userId, followingId) {
    const url = this.baseUrl + '/api/user/' + userId + '/following/' + followingId;
    return this._http.put(url, followingId).map((response, Response) => {
      return response.json();
    });
  }

  addUserToFollowedBy(userId, followingId) {
    const url = this.baseUrl + '/api/user/' + followingId + '/followedBy/' + userId;
    return this._http.put(url, followingId).map((response, Response) => {
      return response.json();
    });
  }
  removeUserFromFollow(userId, followingId) {
    const url = this.baseUrl + '/api/user/' + userId + '/unfollow/' + followingId;
    return this._http.put(url, followingId).map((response, Response) => {
      return response.json();
    });
  }
  removeUserFromFollowedBy(userId, followingId) {
    const url = this.baseUrl + '/api/user/' + followingId + '/unfollowedBy/' + userId;
    return this._http.put(url, followingId).map((response, Response) => {
      return response.json();
    });
  }


}
