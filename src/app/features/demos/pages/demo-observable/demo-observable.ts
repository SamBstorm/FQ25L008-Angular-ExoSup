import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Queue } from '../../../../core/services/queue';
import { filter, map, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-demo-observable',
  imports: [],
  templateUrl: './demo-observable.html',
  styleUrl: './demo-observable.scss'
})
export class DemoObservable implements OnInit, OnDestroy{
  private readonly _queueService : Queue= inject(Queue);

  count! : number; 

  sub : Subscription | null = null

  ngOnInit(): void {
    this.sub = this._queueService.queueCount
    .pipe(
      tap(nb => console.log(nb)),
      map(nb => nb - 1),
      filter(nb => nb % 2 == 0),
      take(2),
    )
    .subscribe({
      next : c => this.count = c,
      error : err => console.error(err)
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub = null;
  }
}
