import { Injectable } from '@angular/core';
import { interval, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Queue {
  private min : number = 5;
  private max : number = 15;
  private _count = Math.floor(Math.random()*(this.max-this.min+1))+this.min;  //entre 5 et 44
  private _timeout?: any;
  queueCount : Observable<number> = new Observable<number>(observer =>
    {      
      observer.next(this._count);
      this._timeout = this.createTimeout(observer);
      return () => clearTimeout(this._timeout);
    }
  ); 

  private createTimeout(observer : Subscriber<number>) {
    return setTimeout(
      () => {
          this._count--; 
          observer.next(this._count);
          if(this._count > 0){
            this._timeout = this.createTimeout(observer);
          }
        },
        1000*Math.floor(Math.random()*10)+1);
  }

}
