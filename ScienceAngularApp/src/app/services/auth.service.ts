import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  isAuth = true
  constructor() { }


  changeAuth(){
    this.isAuth = !this.isAuth
  }  

}
