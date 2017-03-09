import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { KittensComponent }   from './app/kittens/kittens.component';
import { UserListComponent } from './app/users/user-list.component';
import { PlantListComponent } from './app/plants/plant-list.component';
import { RegistrationComponent } from './app/registration/registration.component';
import { UserListService } from './app/temp/user-list.service';
import { routing } from './app/app.routes';
import { FormsModule } from '@angular/forms';

import { PipeModule } from './pipe.module';
import {PlantListService} from "./app/plants/plant-list.service";
import { RegistrationService } from './app/registration/registration.service';

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
        KittensComponent,
        HomeComponent,
        NavbarComponent,
        UserListComponent,
        PlantListComponent,
        RegistrationComponent
    ],
    providers: [ UserListService, PlantListService, RegistrationService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
