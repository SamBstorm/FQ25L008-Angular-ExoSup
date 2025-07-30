import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found.component',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{
  private readonly _router : Router = inject(Router);

  timer : number = 10;
  
  ngOnInit(): void {
    let interval = setInterval(
      () => this.timer-=1,
      1000
    );
    /*setTimeout(
      () => this._router.navigate(['/','demos']),
      10000);*/
    setTimeout(
      () => this._router.navigateByUrl('/demos'),
      10000);
  }


}
