import { Roles, UsersAdmService } from './../../../services/users-adm.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthUserService, User } from 'src/app/services/auth-user.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  item:string = 'Пользователь';
  getedUser:User |any;
  uuid:string = '';
  token:any;
  roles:Roles |any;
  userForm!: FormGroup

  constructor(private user:AuthUserService, private routeString: ActivatedRoute, private route:Router, private admUser:UsersAdmService,) {}

  ngOnInit(): void {

    //Получение token из сервиса AuthUserService
    this.token = this.user.getUser()?.token

    //если токер есть
    if(this.token){

    }else{
      this.route.navigate(['/'])
      //console.log('Users нет токена', this.token)
    }

    //Получаем параметр uuid преданный из родительского компонента через [routerLink] в user-page.component.html
    this.routeString.params.subscribe((params:Params)=>{

      this.uuid = params['uuid']
      //Вызов функции получения данных о юзере
      this.infoUser(this.uuid,this.token)
    });

    

    //ОСТАНОВИЛСЯ ТУТ!!!!
    //console.log(`РОЛИ`,this.admUser.getRoles())

    //форма
    this.userForm = new FormGroup({

      FIO:new FormControl(),
      email:new FormControl(),
      phoneWork:new FormControl(),
      phoneMobile:new FormControl(),
    })
  }


  infoUser(uuid:string,token:string){
    //console.log('Запрос на получение юзера', uuid)

    this.admUser.getUser(uuid,token).subscribe(resp =>{
      //console.log(`Ответ на получение юзера`,resp);
      this.getedUser = resp;
      this.getedUser.phoneWork = this.getedUser.phones[0].number;
      this.getedUser.phoneMobile = this.getedUser.phones[1]?.number;
      console.log('getedUser',this.getedUser)
      this.roles = this.admUser.getRoles()

    })
  }

  editUser(){
    if(this.userForm.controls['password'].value == this.userForm.controls['password1'].value){
      console.log(`Пароли совпадают`);
      this.admUser.editUser(this.uuid, this.token, this.userForm.value)
    }else{
      console.log(`Пароли не совпадают`);
    }

  }
}
