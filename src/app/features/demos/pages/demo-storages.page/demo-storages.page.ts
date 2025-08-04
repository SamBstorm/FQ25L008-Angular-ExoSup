import { Component, inject, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILogin } from './models/ilogin';
import { LoginLocalStorageService } from './services/login-local-storage.service';
import { LoginSessionStorageService } from './services/login-session-storage.service';

@Component({
  selector: 'app-demo-storages.page',
  imports: [ReactiveFormsModule],
  templateUrl: './demo-storages.page.html',
  styleUrl: './demo-storages.page.scss'
})
export class DemoStoragesPage {
  private readonly _fb : FormBuilder = inject(FormBuilder);
  private readonly _loginLS : LoginSessionStorageService = inject(LoginSessionStorageService); 

  loginForm : FormGroup = this._fb.group({
    login : [null, [Validators.required]],
    pwd : [null, [Validators.required]]
  })

  login : Signal<ILogin|null> = this._loginLS.login;

  onSubmit(){
    if(this.loginForm.invalid) throw new Error('Veuillez réessayer');
    if(
      this.loginForm.value.login == 'Sam' &&
      this.loginForm.value.pwd == 'Test1234='){
        let login : ILogin = {
          login : 'Samuel Legrain',
          token : 'abcdefghijklmnopqrstuvwxyz'
        };
        this._loginLS.setCurrentLogin(login);
      }
  }

  onDisconnect(){
    this._loginLS.clearCurrentLogin();
  }
}
