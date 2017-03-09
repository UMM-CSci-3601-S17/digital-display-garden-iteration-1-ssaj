import { Component, OnInit } from '@angular/core';
import { PlantService } from "./plant.service";
import { Plant } from "./plant";
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    // The html tag
    selector: 'plant-component',
    templateUrl: 'plant.component.html'
})

export class PlantComponent implements OnInit {
    public selectedPlant: Plant;

    plants: Plant[];

    public message: string;

    // Parameter auto-defines plantService and identifies it as an injection site
    constructor(private plantService: PlantService){

    }

    getPlants(): void{
        // When the Promise has data ready, then assign what the plants
        // Promise returns to this plant collection
        this.plantService.getPlants()
            .subscribe(plants => this.plants = plants);
    }

    onSelect(plant): void{
        this.selectedPlant = plant;
    }

    // !!! Save for future use !!!
    // fileChange(event) {
    //     console.log("Hello!");
    //
    //     this.plantService.uploadFile(event);
    //
    //     this.plantService.getPlants();
    //
    // }
    //

    ngOnInit(): void {
        this.getPlants();
    }
}
