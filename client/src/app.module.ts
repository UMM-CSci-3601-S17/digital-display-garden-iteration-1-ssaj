import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { PlantComponent } from './app/plants/plant.component';
import { routing } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { PipeModule } from './pipe.module';
import {PlantService} from "./app/plants/plant.service";
import {PlantDetailComponent} from "./app/plants/plant-detail.component";



// Defines this as the root module
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
        PlantComponent,
        PlantDetailComponent
    ],
    providers: [ PlantService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
