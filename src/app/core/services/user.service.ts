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

  currentUser = signal<Iuser | null>(null);

  createUser(newUser : Iuser) : void{
    let idMax : number = Math.max(...this.users().map(u => u.id));
    newUser.id = idMax +1;
    this.users.update( value => [...value, newUser]);
  }

  updateUser(id : number, newValues : Iuser){
    let users : Iuser[] = this.users();
    let userFound = users.find(u => u.id == id);    
    if(!userFound) throw new Error(`No user with id : ${id}`);
    let userIndex : number = users.indexOf(userFound);
    newValues.id = id;
    users.splice(userIndex,1,newValues);
    this.users.set(users);
  }

  getUser(id: number) : Iuser{
    let userFound = this.users().find(u => u.id == id);
    if(!userFound) throw new Error(`No user with id : ${id}`);
    return userFound;
  }

  deleteUser(id: number) : void {
    this.users.update(value => value.filter(u => u.id != id));
  }

  login(email : string, password : string) : void{
    let user : Iuser | undefined = this.users().find(u => u.email == email && u.password == password);
    this.currentUser.set(user ?? null); 
  }

  logout() : void{
    this.currentUser.set(null);
  }

}
