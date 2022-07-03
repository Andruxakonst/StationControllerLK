import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface LoginedUser{ //Пользователь выполняющий вход
  email:string;
  password:string
}
export interface Phones{
  name:string;
  number:number
}

export interface User extends LoginedUser{ //Пользователь, вошедший в систему. Унаследованный интерфейс интерфейс от LoginedUser

    token: string,
    uuid: string,
    firstname: string,
    lastname: string,
    surname:string,
    roles: [string],
    isAuth: boolean,
    phones: Phones[]
}

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  user:User | undefined;
  constructor(private http:HttpClient) { }

  login(loginUser:LoginedUser):Promise<User>|any{
    var resoultP = new Promise((resolve, reject) => {

      this.http.post('http://10.10.9.102/api/v1/auth', loginUser).subscribe({

        next:(data:any)=>{
          //console.log(`Авторизовался user`, data)
          resolve(data)
        },

        error:(err)=>{
          console.log(`Запрос вернул ошибку`, err);
          reject(err)
        },

        complete:()=>{
          //console.log(`Запрос выполнен успешно`)
        }

      });

    });

    return resoultP
  }

  logout():boolean{
    this.user = undefined;
    localStorage.clear();
    if(!this.user && !localStorage.getItem('auth_token')){
      return true
    }else{
      return false
    }
  }

  //сохраняем пользователя
  saveUser(user:User):boolean{
    this.user = user
    return true
  }
  //возвращаем пользователя
  getUser():User|null{
    if(this.user){
      return this.user
    }else{
      return null
    }
  }
  //проверяем авторизова ли юзер
  isAuth():boolean{
    if(this.user && this.user.isAuth){
      return true
    }else{
      return false
    }
  }
  //проверяем админ ли юзер
  isAdnin():boolean{
    if(this.user && this.user.roles.includes('ROLE_ADMIN')){
      return true
    }else{
      return false
    }
  }
  //получаем роли пользователя
  getUserRole():[string]|null{
    if(this.user){
      return this.user.roles
    }else{
      return null
    }
  }
  //получаем ФИО пользователя
  getUserFIO():string|null{
    if(this.user){
      return `${this.user.firstname} ${this.user.lastname}`
    }else{
      return null
    }
  }

}

