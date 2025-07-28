import { Component } from '@angular/core';
import { Chrono } from '../../../../core/services/chrono';

@Component({
  selector: 'app-demo-services-2',
  imports: [],
  templateUrl: './demo-services-2.html',
  styleUrl: './demo-services-2.scss'
})
export class DemoServices2 {

  constructor(private _chrono : Chrono){}

  
  public get temps() : number {
    return this._chrono.time();
  }
  

}
