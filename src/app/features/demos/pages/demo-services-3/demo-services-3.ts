import { Component, inject } from '@angular/core';
import { Chrono } from '../../../../core/services/chrono';

@Component({
  selector: 'app-demo-services-3',
  imports: [],
  providers: [Chrono],
  templateUrl: './demo-services-3.html',
  styleUrl: './demo-services-3.scss'
})
export class DemoServices3 {
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
}
