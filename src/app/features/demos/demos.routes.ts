import { DemoRoutesCrud } from './pages/demo-routes-crud/demo-routes-crud';
import { Routes } from '@angular/router';
import { Demos } from './demos';
import { DemoNgcontent } from './pages/demo-ngcontent/demo-ngcontent';
import { DemoServices } from './pages/demo-services/demo-services';
import { DemoServices2 } from './pages/demo-services-2/demo-services-2';
import { DemoServices3 } from './pages/demo-services-3/demo-services-3';
import { DemoReactiveForms } from './pages/demo-reactive-forms/demo-reactive-forms';

export const routes : Routes = [
    { path : '', component : Demos, children: [
        { path : 'ngcontent', component : DemoNgcontent },
        { path : 'services', component : DemoServices },
        { path : 'services-2', component : DemoServices2 },
        { path : 'services-3', component : DemoServices3 },
        { path : 'reactForms', component : DemoReactiveForms },
        { path : 'routesCRUD', loadChildren : () => import('./pages/demo-routes-crud/demo-routes-crud.routes').then(r => r.routes)},
        { path : 'observable', loadComponent : () => import('./pages/demo-observable/demo-observable').then(c => c.DemoObservable)}
    ]},
    
]