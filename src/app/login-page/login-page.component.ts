import { AuthUserService, LoginedUser, User } from './../services/auth-user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [],
})

export class LoginPageComponent implements OnInit{
  title: string = 'Login' ;
  errMessage:string = '';
  authForm!: FormGroup;

  constructor(private rout:Router, private auth:AuthUserService) {
  }
  ngOnInit(): void {
    this.authForm = new FormGroup({
      email:new FormControl('n.pletnev@alta-group.ru'),
      password: new FormControl('igisagy7ik'),
    })
  }

  login(){ //запускаем при нажатии кнопки submit в форме
    const loginUser:LoginedUser = this.authForm.value;

    //получаем пропис
    this.auth.login(loginUser).then((resolve:User, reject:any)=>{


      if(resolve){ // все ОК, обрабатываем результат
        //console.log('resolve',resolve);
        var saved:boolean = this.auth.saveUser(resolve) //сохраняем юзера локально
        if(saved){                                      //если true то сохранен
          //console.log(`Вход выполнен успешно`);

          this.rout.navigate(['dashboard'])             // перенаплавляем в dashboard

        }else(
          console.error(`Не удалось сохранить пользователя в хранилище!`)
        )
      }

      if(reject){ // что-то не так, обрабатываем ошибку
        console.log('reject',reject);
      }

    })

  }
}
