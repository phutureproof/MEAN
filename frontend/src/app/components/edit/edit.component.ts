import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../classes/user";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: DataService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.api.get('user', id).subscribe(user => this.user = user);
  }

  saveUser(user: User) {
    this.api.update('user', user._id, user).subscribe();
  }

}
