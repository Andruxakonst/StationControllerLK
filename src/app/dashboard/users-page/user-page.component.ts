import { Router } from '@angular/router';
import { Users, UsersAdmService } from './../../services/users-adm.service';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';


@Component({
  selector: 'app-users-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UsersPageComponent implements OnInit {
  item:string = 'Редактор пользователей';
  token:any;
  errMassage:string ='';
  users:Users[]=[];
  massage:string = 'Выберите пользователя для редактирования!';
  uuidUser:string = '';  //Переменная для передачи в дочерний элемент для редактирования пользователя
  urlForRols:string =''; //строка для получения ролей пользователя. Берется у users _links.allRoles.href

  constructor(private userAdmin:UsersAdmService, private user:AuthUserService, private route:Router, ) { }

  ngOnInit(): void {

    this.token = this.user.getUser()?.token
    //console.log('token',this.token)
    if(this.token){

      this.userAdmin.getAllUsers(this.token).then((resolve)=>{
          console.log('USERS',resolve._links.allRoles.href);
          //присваиваем users то что пришло
          this.users = resolve._embedded.users;
          //Получаем список ролей
          this.urlForRols = resolve._links.allRoles.href
          this.userAdmin.getRolesHTTP(this.urlForRols, this.token)
      })

    }else{
      this.route.navigate(['/'])
      console.log('Users нет токена', this.token)
    }



  }

  delUser(uuid:string){
    //console.log(`Удаление`,uuid)
    this.userAdmin.delUser(uuid, this.token).subscribe(
      {

        next:(data)=>{
          //console.log(`Удаление пользователя`, `что-то пришло`)
          //console.log(data)

          //Это нужно сделать более элегантно
          //Обновление списка юзеров
          this.userAdmin.getAllUsers(this.token).then((resolve)=>{
            //console.log(resolve._embedded.users);
            this.users = resolve._embedded.users;
           })

           //реализовать отчистку формы

        },

        error:(err)=>{
          console.log(`Ошибка удаления пользователя`, err);
          this.errMassage = err.message;
        },

        complete:()=>{
          console.log(`User deleted`)
          //this.errMassage = 'Пользователь удален!';
        }

      })
  }
  togleMSG(){
    this.massage =''
  }

}
