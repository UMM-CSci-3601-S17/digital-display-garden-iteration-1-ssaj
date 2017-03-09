import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "./registration.service";
import { Registration } from "../temp/Registration";
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    selector: 'registration.component',
    templateUrl: 'registration.html'
})

export class RegistrationComponent implements OnInit{
    public registration: Registration[];


    constructor(private registrationService: RegistrationService) {
        // this.plants = this.plantListService.getPlants();
    }


    add(password: string): void {
        password = password.trim();
        if (!password) { return; }
        this.registrationService.create(password);
    }

    ngOnInit(): void {

        console.log("Subscribed to plants");
    }
}
