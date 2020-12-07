import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {
@Input() u:any;
  constructor() { }

  ngOnInit(): void {
  }

}
