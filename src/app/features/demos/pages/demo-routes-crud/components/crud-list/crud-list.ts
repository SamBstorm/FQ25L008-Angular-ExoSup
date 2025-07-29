import { Component, inject, Signal } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-crud-list',
  imports: [],
  templateUrl: './crud-list.html',
  styleUrl: './crud-list.scss'
})
export class CrudList {
  private readonly _userService : UserService = inject(UserService);
  
  users : Signal<Iuser[]> = this._userService.users;


  
}
