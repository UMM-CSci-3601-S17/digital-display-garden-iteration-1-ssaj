import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { routing } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { PipeModule } from './pipe.module';
import {PlantListService} from "./app/plants/plant-list.service";
import {PlantListComponent} from "./app/plants/plant-list.component";
import {AdministrationComponent} from "./app/plants/administration.component";


// Defines this as the root mod ule
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule,
        PipeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PlantListComponent,
        AdministrationComponent
    ],
    providers: [ PlantListService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
