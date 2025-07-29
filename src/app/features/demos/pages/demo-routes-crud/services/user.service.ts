import { Injectable, signal } from '@angular/core';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = signal<Iuser[]>([{
    id : 1,
    email : 'admin@admin',
    password : 'admin',
    role : 'admin'
  },
  {
    id : 2,
    email : 'user@user',
    password : 'user',
    role : 'user'
  }
]);

  createUser(newUser : Iuser) : void{
    let idMax : number = Math.max(...this.users().map(u => u.id));
    newUser.id = idMax +1;
    this.users.update( value => [...value, newUser]);
  }

  updateUser(id : number, newValues : Iuser){
    let userFound = this.users().find(u => u.id == id);
    if(!userFound) throw new Error(`No user with id : ${id}`);
    userFound.email = newValues.email;
    userFound.password = newValues.password;
    userFound.role = newValues.role;
  }

  getUser(id: number) : Iuser{
    let userFound = this.users().find(u => u.id == id);
    if(!userFound) throw new Error(`No user with id : ${id}`);
    return userFound;
  }

  deleteUser(id: number) : void {
    this.users.update(value => value.filter(u => u.id != id));
  }

}
