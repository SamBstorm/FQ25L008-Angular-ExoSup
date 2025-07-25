import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-filter',
  imports: [FormsModule],
  templateUrl: './price-filter.html',
  styleUrl: './price-filter.scss'
})
export class PriceFilter {

  prixMax? : number;


}
