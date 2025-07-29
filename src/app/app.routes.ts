import { Exercices } from './features/exercices/exercices';
import { DemoReactiveForms } from './features/demos/pages/demo-reactive-forms/demo-reactive-forms';
import { Routes } from '@angular/router';
import { ProductDashboard } from './features/exercices/pages/product-dashboard/product-dashboard';
import { DemoNgcontent } from './features/demos/pages/demo-ngcontent/demo-ngcontent';
import { DemoServices } from './features/demos/pages/demo-services/demo-services';
import { DemoServices2 } from './features/demos/pages/demo-services-2/demo-services-2';
import { DemoServices3 } from './features/demos/pages/demo-services-3/demo-services-3';

export const routes: Routes = [
    { 
        path : 'demos', 
        loadChildren: () => import('./features/demos/demos.routes').then(r => r.routes)
    },
    { 
        path : 'exos', 
        loadChildren: () => import('./features/exercices/exercices.routes').then(r => r.routes)
    },
    { path : '', redirectTo : 'exos/filtre', pathMatch : 'full'},
    { 
        path : '**', 
        loadComponent : () => import('./features/not-found.component/not-found.component').then(c => c.NotFoundComponent)
    }
];
