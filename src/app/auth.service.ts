import { Injectable } from '@angular/core';
import { User } from './model/user';

const authData = {
  user1: {
    name: 'Admin',
    permission: 'all',
    password: 'Admin',
  },
  user2: {
    name: 'MyName',
    permission: 'none',
    password: 'test',
  },
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public login(userInfo: User) {
    console.log(userInfo);
    console.log(authData.user1);

    if (
      userInfo.password === authData.user1.password &&
      userInfo.name === authData.user1.name
    ) {
      localStorage.setItem(
        'ACCESS_TOKEN',
        `${authData.user1.name}:${authData.user1.permission}`
      );
      return true;
    } else if (
      userInfo.password === authData.user2.password &&
      userInfo.name === authData.user2.name
    ) {
      localStorage.setItem(
        'ACCESS_TOKEN',
        `${authData.user2.name}:${authData.user2.permission}`
      );
      return true;
    } else {
      return false;
    }
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public isAdmin() {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken !== null) {
      const [name, permission] = accessToken.split(':');
      return authData.user1.permission === permission;
    }
    return false;
  }
}
