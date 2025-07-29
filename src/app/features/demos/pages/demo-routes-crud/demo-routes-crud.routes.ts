import { Routes } from "@angular/router";
import { CrudList } from "./components/crud-list/crud-list";
import { CrudCreate } from "./components/crud-create/crud-create";
import { CrudUpdate } from "./components/crud-update/crud-update";
import { CrudDetails } from "./components/crud-details/crud-details";

export const routes : Routes = [
    {
        path : '', redirectTo:'list', pathMatch : 'full'
    },
    {
        path: '' , loadComponent : () => import('./demo-routes-crud').then(c => c.DemoRoutesCrud), children:[
            {path : 'list', component : CrudList},
            {path : 'create', component : CrudCreate},
            {path : 'update', component : CrudUpdate},
            {path : 'details', component : CrudDetails},
        ]
    }
]