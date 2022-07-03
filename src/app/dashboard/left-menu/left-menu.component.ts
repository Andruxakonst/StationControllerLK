import { User } from './../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  userAdmin:boolean = false
  constructor(private user:AuthUserService) { }

  ngOnInit(): void {
    this.userAdmin = this.user.isAdnin();
  }

}
