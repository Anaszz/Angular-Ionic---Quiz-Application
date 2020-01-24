import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   users: User[] =[]
   //crée une variable users de type User et qui est par défault un array vide

  constructor() { }

  addUser(user: User){
    this.users.push(user)
  }
}
