import { User, Phones } from './auth-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Users{

  email: string,
  firstname: string,
  lastname: string,
  surname:string,
  roles:[string],
  links: {empty: boolean},
  phones: Phones[],
  position: string,
  uuid: string,
  isActive:boolean
}
export interface Roles{
  ROLE_OPERATOR:string;
  ROLE_TECHNOLOGIST:string;
  ROLE_SUPERADMIN:string;
  ROLE_MANAGER:string;
  ROLE_ADMIN:string
}

@Injectable({
  providedIn: 'root'
})
export class UsersAdmService {
  roles!: Roles;
  constructor(private http:HttpClient) { }



  getAllUsers(token:string):Promise<any>{
    var promise:any = new Promise((resolve, reject) => {   //сменить тип промиса с any!!!

      this.http.get('http://10.10.9.102/api/v1/users',{headers: new HttpHeaders({'Authorization': `Bearer ${token}`})})
      .subscribe({
        next:(data)=>{
          //console.log(`UsersAdmService`, `что-то пришло`)
          //console.log(data)
          resolve(data)
        },
        error:(err)=>{
          console.log(`Запрос UsersAdmService вернул ошибку`, err);
          reject(err)
        },
        complete:()=>{
          //console.log(`Запрос выполнен успешно`)
        }
      });
    });

    return promise
  }
  //получение ролей пользователя
  getRolesHTTP(url:string, token:string){
    console.log('Запрос списка ролей ссылка ', url, token)
    this.http.get(url,{headers: new HttpHeaders({'Authorization': `Bearer ${token}`})}).subscribe({
      next:(data:Roles| any)=>{
        //console.log(`ROLES service`,data)
        this.roles = data;
      },
      error:(err)=>{
        console.log(`Запрос UsersAdmService вернул ошибку`, err);
      },
      complete:()=>{
        //console.log(`Запрос выполнен успешно`)
      }
    });

  }
  getRoles():Roles{
    return this.roles
  }

  addUser(addedUser:string, token:string){
    console.log(`addUser`,addedUser, token)
    var resp = this.http.post('http://10.10.9.102/api/v1/users',addedUser,{headers: new HttpHeaders({'Authorization': `Bearer ${token}`})})
    return resp
  }

  delUser(uuid:string, token:string){
    //console.log(`Удаление`,uuid, token)
    var resp = this.http.delete(
      `http://10.10.9.102/api/v1/users/${uuid}`,
      {headers: new HttpHeaders({'Authorization': `Bearer ${token}`})}
    )
    return resp
  }

  getUser(uuid:string, token:string){
    //console.log('Инфо о юзере ', uuid, token)
    var resp = this.http.get(
      `http://10.10.9.102/api/v1/users/${uuid}`,
      {headers: new HttpHeaders({'Authorization': `Bearer ${token}`,})}
    )
    return resp
  }

  editUser(uuid:string, token:string, editedUser:User){
    console.log('Редактирование пользователя ', uuid, token, editedUser)
  }

}
