import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class User {
    id: string;
    username: string;
    roles: string[];

    constructor(id, username, roles) {
        this.id = id;
        this.username = username;
        this.roles = roles;
    }
}

@Injectable()
export class UsersService {
  
  constructor(private _http: Http){
  }

  get() {
    return this._http.get('/assets/users.json')
        .map(response => response.json().users);
  }
}
