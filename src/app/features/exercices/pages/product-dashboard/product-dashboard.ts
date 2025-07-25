import { Component } from '@angular/core';
import { PriceFilter } from "./components/price-filter/price-filter";
import { ProductList } from "./components/product-list/product-list";
import { Iproduct } from './models/iproduct';

@Component({
  selector: 'app-product-dashboard',
  imports: [PriceFilter, ProductList],
  templateUrl: './product-dashboard.html',
  styleUrl: './product-dashboard.scss'
})
export class ProductDashboard {

  products : Iproduct[] = [
    {nom : 'Clavier', photo : '', prix : 19.99, prixPromo : false, qttRestante : 20},
    {nom : 'Clavier Gaming', photo : '', prix : 49.99, prixPromo : false, qttRestante : 10},
    {nom : 'Souris', photo : '', prix : 9.99, prixPromo : false, qttRestante : 25},
    {nom : 'Souris Gaming', photo : '', prix : 19.99, prixPromo : true, nouveauPrix : 14.99, qttRestante : 5},
    {nom : 'PC Gaming', photo : '', prix : 999.99, prixPromo : false , qttRestante : 5}
  ]

}
