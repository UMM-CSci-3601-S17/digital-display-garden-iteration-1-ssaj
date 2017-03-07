import { Component, OnInit } from '@angular/core';
import { PlantListService } from "./plant-list.service";
import { Plant } from "../temp/Plant";
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    selector: 'plant-list-component',
    templateUrl: 'plant-list.component.html'
})

export class PlantListComponent implements OnInit {
    public plants: Plant[];

    constructor(private plantListService: PlantListService) {
        // this.plants = this.plantListService.getPlants();
    }

    fileChange(event) {
        console.log("Hello!");

        this.plantListService.uploadFile(event);



    }


    ngOnInit(): void {

    }
}
