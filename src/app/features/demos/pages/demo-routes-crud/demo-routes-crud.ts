import { Component, inject, Signal } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { UserService } from '../../../../core/services/user.service';
import { Iuser } from '../../../../core/models/iuser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-routes-crud',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './demo-routes-crud.html',
  styleUrl: './demo-routes-crud.scss'
})
export class DemoRoutesCrud {
  private readonly _userService : UserService = inject(UserService);
  private readonly _router : Router = inject(Router);

  currentUser : Signal<Iuser|null> = this._userService.currentUser;

  userMail? : string;
  userPwd? : string;

  onLogin() : void{
    if(!this.userMail || !this.userPwd) throw new Error('Incompleted login form')
    this._userService.login(this.userMail, this.userPwd);
    this.userMail = this.userPwd = undefined;
    this._router.navigateByUrl('/demos/routesCRUD/list');
  }

  onLogout() : void{
    this._userService.logout();
    this._router.navigateByUrl('/demos/routesCRUD');
  }
}
