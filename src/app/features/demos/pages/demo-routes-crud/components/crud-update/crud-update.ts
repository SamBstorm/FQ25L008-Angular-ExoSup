import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../../core/services/user.service';
import { Iuser } from '../../../../../../core/models/iuser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IValidateComponent } from '../../../../../../core/models/ivalidate-component';

@Component({
  selector: 'app-crud-update',
  imports: [ReactiveFormsModule],
  templateUrl: './crud-update.html',
  styleUrl: './crud-update.scss'
})
export class CrudUpdate implements OnInit, IValidateComponent {
  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  private readonly _router : Router = inject(Router);
  private readonly _userService : UserService = inject(UserService);
  private readonly _fb : FormBuilder = inject(FormBuilder);
  
  id! : number;
  userToEdit! : Iuser;

  editForm! : FormGroup;

  validate : boolean = false;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(
      {
        next : (params) => {
          this.id = params['id'];
          this.userToEdit = this._userService.getUser(this.id);
          this.editForm = this.generateForm();
        },
        error : (err) => console.error(err)         
      });
  }

  private generateForm() : FormGroup{
    return this._fb.group({
    email : [this.userToEdit.email,[Validators.required, Validators.email]],
    password : [this.userToEdit.password, [Validators.required]],
    role : [this.userToEdit.role, [Validators.required]]
  });
  }

  onSubmit() : void{
    if(this.editForm.invalid) throw new Error('Formulaire non-valide');
    this.validate = true; 
    let data : Iuser = {
      id : this.id,
      email : this.editForm.value.email,
      password : this.editForm.value.password,
      role : this.editForm.value.role
    };
    this._userService.updateUser(this.id, data);
    this._router.navigate(['/','demos','routesCRUD','list']);
  }
}
