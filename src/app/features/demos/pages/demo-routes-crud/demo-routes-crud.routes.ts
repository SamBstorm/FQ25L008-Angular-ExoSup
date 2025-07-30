import { Routes } from "@angular/router";
import { CrudList } from "./components/crud-list/crud-list";
import { CrudCreate } from "./components/crud-create/crud-create";
import { CrudUpdate } from "./components/crud-update/crud-update";
import { CrudDetails } from "./components/crud-details/crud-details";
import { DemoRoutesCrud } from "./demo-routes-crud";

export const routes : Routes = [
    {
        path : '', redirectTo:'list', pathMatch : 'full'
    },
    {
        path: '' , component : DemoRoutesCrud, children:[
            {
                path : 'list',
                loadComponent : () => import('./components/crud-list/crud-list').then(c => c.CrudList)
            },
            {path : 'create', component : CrudCreate},
            {path : 'update', component : CrudUpdate},
            {
                path : 'details/:id', 
                loadComponent : () => import('./components/crud-details/crud-details').then(c => c.CrudDetails)
            }
        ]
    }
]