import { Routes } from "@angular/router";
import { Exercices } from "./exercices";
import { ProductDashboard } from "./pages/product-dashboard/product-dashboard";

export const routes : Routes = [
    {path : '', component : Exercices, children : [
        { path : 'filtre', component : ProductDashboard },
    ]}
] 