import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/usersService';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.css' ]
})
export class Users implements OnInit {
  private userslist;

  constructor(private _usersService: UsersService) {
  }

  ngOnInit() {
    this.userslist = this._usersService.get();
  }

  onClick(username) {
      alert(username);
  }
}