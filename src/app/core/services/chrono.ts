import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Chrono {
  public time : WritableSignal<number> = signal<number>(0);

  startChrono() : void{
    setInterval( () => this.incrementTime(), 1000);
  }

  private incrementTime() : void{
    let currentValue: number = this.time();
    this.time.set(currentValue + 1);
  }
}
