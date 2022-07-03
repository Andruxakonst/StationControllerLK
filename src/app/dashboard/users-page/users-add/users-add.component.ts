import { Router } from '@angular/router';
import { Users, UsersAdmService } from './../../../services/users-adm.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  item:string = 'Добавление пользователей';
  token:any;
  users:Users[]=[];
  addUserForm!: FormGroup;
  errMassage:string ='';


  constructor(private userAdmin:UsersAdmService, private user:AuthUserService, private route:Router) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      lastname:new FormControl(''),
      firstname: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      position: new FormControl(''),
      password: new FormControl(''),
      password2: new FormControl(''),
    })

     //Получение token из сервиса AuthUserService
     this.token = this.user.getUser()?.token

     //если токер есть
     if(this.token){

     }else{
       this.route.navigate(['/'])
       console.log('Users нет токена', this.token)
     }

  }

  addUser(){
    console.log(`addUser`,this.addUserForm.value)
    console.log(`addUser token`,this.addUserForm.value)
    this.userAdmin.addUser(this.addUserForm.value, this.token).subscribe(
      {

        next:(data)=>{
          //console.log(`Добавление пользователя`, `что-то пришло`)
          //console.log(data)

          //Это нужно сделать более элегантно

          //Обновление списка юзеров
          console.log(`Обновление списка юзеров`)
          this.userAdmin.getAllUsers(this.token).then((resolve)=>{
            console.log(`Обновление списка юзеров`)
            //console.log(resolve._embedded.users);
            this.users = resolve._embedded.users;
          })

           //реализовать отчистку формы

        },

        error:(err)=>{
          console.log(`Ошибка добавления пользователя`, err);
          this.errMassage = err.message;
        },

        complete:()=>{
          console.log(`User added`)
          this.errMassage = 'Пользователь добавлен!';
        }

      }
    )
  }
}
