import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Chrono {
  public time : WritableSignal<number> = signal<number>(0);

  interval : any |undefined;

  startChrono() : void{
    if(this.interval) throw new Error('Already started...');
    this.interval = setInterval( () => this.incrementTime(), 1000);
  }

  stopChrono() : void{
    if(!this.interval) throw new Error('No chrono running...');
    clearInterval(this.interval);
    this.interval = undefined;
  }

  private incrementTime() : void{
    let currentValue: number = this.time();
    this.time.set(currentValue + 1);
  }
}
