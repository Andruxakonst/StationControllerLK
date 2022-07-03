import { Router } from '@angular/router';
import { AuthUserService } from './../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  userName:string | null | undefined
  constructor(private user:AuthUserService, private rout:Router) { }

  ngOnInit(): void {

    this.userName = this.user.getUserFIO();
    //console.log(this.userName)
  }

  logOut(){
    var isOut:boolean = this.user.logout()
    if(isOut){
      //console.log('выход выполнен успешно!')
      this.rout.navigate(['/'])
    }else{
      console.log('Не удалось выполнить выход пользователя!')
    }
  }
}
