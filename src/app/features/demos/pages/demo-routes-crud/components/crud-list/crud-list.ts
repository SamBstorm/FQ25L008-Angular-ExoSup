import { Component, inject, OnInit, Signal } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-list',
  imports: [],
  templateUrl: './crud-list.html',
  styleUrl: './crud-list.scss'
})
export class CrudList implements OnInit{
  private readonly _userService : UserService = inject(UserService);
  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  private readonly _router : Router = inject(Router);
  
  users : Signal<Iuser[]> = this._userService.users;

  notification? : any;
  
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(
      {
        next : (queryParams) => {
          this.notification = {
            msg : queryParams['msg'],
            type : queryParams['type']
          };
        }
      }
    )
  }

  public goToDetails(id : number){
    this._router.navigate(['/','demos', 'routesCRUD','details',id])
  }
  
}
