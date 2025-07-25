import { Component, input, InputSignal } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

  data : InputSignal<Iproduct[]> = input.required<Iproduct[]>();
  //products : InputSignal<Iproduct[]> = input<Iproduct[]>([]);

  filtre : InputSignal<number | undefined> = input<number | undefined>();

  
}
