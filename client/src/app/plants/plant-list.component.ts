import { Component, OnInit } from '@angular/core';
import { PlantListService } from "./plant-list.service";
import { Plants } from "./Plants";
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    selector: 'plant-list-component',
    templateUrl: 'plant-list.component.html'
})

export class PlantListComponent implements OnInit {
    public plants: Plants[];


    constructor(private plantListService: PlantListService) {
        // this.plants = this.plantListService.getPlants();
    }

    fileChange(event) {
        console.log("Hello!");

        this.plantListService.uploadFile(event);

        this.plantListService.getPlants();


    }

    ngOnInit(): void {
        this.plantListService.getPlants().subscribe(
            plants => this.plants = plants,
            err => {
                console.log(err);
            }
        );

        console.log("Subscribed to plants");
    }
}
