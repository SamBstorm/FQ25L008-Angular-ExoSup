import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDashboard } from "./features/exercices/pages/product-dashboard/product-dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ExoSup');
}
