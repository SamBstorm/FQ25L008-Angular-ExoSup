import { Routes } from "@angular/router";
import { CrudCreate } from "./components/crud-create/crud-create";
import { CrudUpdate } from "./components/crud-update/crud-update";
import { DemoRoutesCrud } from "./demo-routes-crud";
import { isConnectedGuard } from "../../../../core/guards/is-connected-guard";
import { unfinishedFormGuard } from "../../../../core/guards/unfinished-form-guard";
import { isAdminGuard } from "../../../../core/guards/is-admin-guard";

export const routes : Routes = [
    {
        path: '' , 
        component : DemoRoutesCrud, 
        canActivateChild : [isConnectedGuard],
        children:[
            {
                path : 'list',
                loadComponent : () => import('./components/crud-list/crud-list').then(c => c.CrudList)
            },
            {
                path : 'create',
                canMatch: [isAdminGuard],
                loadComponent : () => import('./components/crud-create/crud-create').then(c => c.CrudCreate),
            },
            {
                path : 'update/:id', 
                loadComponent : () => import('./components/crud-update/crud-update').then(c => c.CrudUpdate),
                canDeactivate : [unfinishedFormGuard]
            },
            {
                path : 'details/:id', 
                loadComponent : () => import('./components/crud-details/crud-details').then(c => c.CrudDetails)
            }
        ]
    }
]