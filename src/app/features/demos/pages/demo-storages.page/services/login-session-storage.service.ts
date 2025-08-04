import { Injectable, OnInit, signal } from '@angular/core';
import { ILogin } from '../models/ilogin';

@Injectable({
  providedIn: 'root'
})
export class LoginSessionStorageService {
  private key : string = 'login';

  login = signal<ILogin|null>(this.getCurretLogin());

  getCurretLogin() : ILogin | null{
    return JSON.parse(sessionStorage.getItem(this.key) ?? 'null');
  }

  setCurrentLogin(newLogin : ILogin) : void{
    sessionStorage.setItem(this.key, JSON.stringify(newLogin));
    this.login.set(this.getCurretLogin());
  }

  clearCurrentLogin() : void{
    sessionStorage.removeItem(this.key);
    this.login.set(this.getCurretLogin());
  }
}
