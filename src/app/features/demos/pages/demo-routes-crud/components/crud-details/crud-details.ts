import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../../../core/services/user.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Iuser } from '../../../../../../core/models/iuser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-details',
  imports: [RouterLink],
  templateUrl: './crud-details.html',
  styleUrl: './crud-details.scss'
})
export class CrudDetails implements OnInit, OnDestroy {
  private readonly _userService : UserService = inject(UserService);
  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  private readonly _router : Router = inject(Router);
  id! : number;
  
  currentUser! : Iuser;
  sub : Subscription | null = null;
  
  ngOnInit(): void {
    //this.id = this._activatedRoute.snapshot.params['id'];
    //this.currentUser = this._userService.getUser(this.id);
    
    /*let paramMap = this._activatedRoute.snapshot.paramMap;
    if(paramMap.has('id')){
      this.id = parseInt(paramMap.get('id')!);
      }
      this.currentUser = this._userService.getUser(this.id);*/
      
      this.sub = this._activatedRoute.params.subscribe({
        next : (datas) => this.loadUser(datas),
        error: (err) => this.errorRedirect(err),
        complete : () => console.log(`La données obtenue est ${this.id}`)
      });
      
    }

    ngOnDestroy(): void {
      console.log(this.sub);
      
      this.sub?.unsubscribe();
      this.sub = null;
    }
    
    private loadUser(params: Params) : void{
      this.id = params['id'];
      try {
        this.currentUser = this._userService.getUser(this.id);
      } catch (error) {
        this.errorRedirect(error);
      } 
    }

  private errorRedirect(error: any) : void{
    this._router.navigate(['/','demos','routesCRUD','list'],{
      queryParams : {
        msg : (error as Error).message,
        type : 'error'
      }
    });
  }

}
