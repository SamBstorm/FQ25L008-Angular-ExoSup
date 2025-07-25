import { Routes } from '@angular/router';
import { ProductDashboard } from './features/exercices/pages/product-dashboard/product-dashboard';

export const routes: Routes = [
    { path : 'exos/filtre', component : ProductDashboard },
    { path : '', redirectTo : 'exos/filtre', pathMatch : 'full'}
];
