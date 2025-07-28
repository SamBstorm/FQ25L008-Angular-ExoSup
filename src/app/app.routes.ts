import { Routes } from '@angular/router';
import { ProductDashboard } from './features/exercices/pages/product-dashboard/product-dashboard';
import { DemoNgcontent } from './features/demos/pages/demo-ngcontent/demo-ngcontent';
import { DemoServices } from './features/demos/pages/demo-services/demo-services';
import { DemoServices2 } from './features/demos/pages/demo-services-2/demo-services-2';
import { DemoServices3 } from './features/demos/pages/demo-services-3/demo-services-3';

export const routes: Routes = [
    { path : 'exos/filtre', component : ProductDashboard },
    { path : 'demos/ngcontent', component : DemoNgcontent },
    { path : 'demos/services', component : DemoServices },
    { path : 'demos/services-2', component : DemoServices2 },
    { path : 'demos/services-3', component : DemoServices3 },
    { path : '', redirectTo : 'exos/filtre', pathMatch : 'full'}
];
