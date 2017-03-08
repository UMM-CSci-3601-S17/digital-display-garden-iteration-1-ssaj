import { Component, OnInit } from '@angular/core';
import { PlantService } from "./plant.service";
import { Plant } from "./Plant";
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    // The html tag
    selector: 'plant-component',
    templateUrl: 'plant.component.html'
})

export class PlantComponent implements OnInit {
    public plants: Plant[];


    constructor(private plantService: PlantService) {
        // this.plants = this.plantListService.getPlants();
    }

    fileChange(event) {
        console.log("Hello!");

        this.plantService.uploadFile(event);

        this.plantService.getPlants();

    }

    ngOnInit(): void {
        this.plantService.getPlants().subscribe(
            plants => this.plants = plants,
            err => {
                console.log(err);
            }
        );

        console.log("Subscribed to plants");
    }
}
