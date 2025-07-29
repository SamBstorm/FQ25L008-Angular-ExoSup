import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-demo-routes-crud',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './demo-routes-crud.html',
  styleUrl: './demo-routes-crud.scss'
})
export class DemoRoutesCrud {

}
