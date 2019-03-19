import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[];

  constructor(private api: DataService) { }

  ngOnInit() {
    this.api.getWithOptions('user', {columns: '_id firstname lastname'}).subscribe(users => this.users = users);
  }

  deleteUser(user: User) {
    this.api.delete('user', user._id).subscribe();
  }

}
