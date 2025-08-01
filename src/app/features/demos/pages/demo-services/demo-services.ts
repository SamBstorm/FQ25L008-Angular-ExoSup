import { Component, inject } from '@angular/core';
import { Chrono } from '../../../../core/services/chrono';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo-services',
  imports: [RouterLink],
  templateUrl: './demo-services.html',
  styleUrl: './demo-services.scss'
})
export class DemoServices {

  //Soit avec inject()
  private readonly _chrono:Chrono = inject(Chrono);

  constructor(){}

  //Soit avec le constructor
  // constructor(private _chrono:Chrono){}

  public get time() : number {
    return this._chrono.time();
  }  

  onStart() : void{
    this._chrono.startChrono();
  }

  onStop() : void {
    this._chrono.stopChrono();
  }
}
