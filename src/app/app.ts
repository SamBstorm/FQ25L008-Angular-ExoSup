import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductDashboard } from './features/exercices/pages/product-dashboard/product-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('ExoSup');
  private readonly _router: Router = inject(Router);

  ngOnInit(): void {
    // this._router.events.subscribe({
    //   next: (event) => {
    //     console.log(event);
    //   },
    // });
  }
}
