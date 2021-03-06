// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PlantListComponent} from "./plants/plant-list.component";
import {AdministrationComponent} from "./plants/administration.component";

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'plants', component: PlantListComponent },
    { path: 'admin', component: AdministrationComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

