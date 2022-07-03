import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router:Router) {
  }
  logout() {
    localStorage.removeItem('auth_token');

    //перенаправить на страницу входа
    this.router.navigate(['/login']);
  }
}
