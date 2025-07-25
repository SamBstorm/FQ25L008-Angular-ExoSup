import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

  products : Iproduct[] = [ ];

  
}
