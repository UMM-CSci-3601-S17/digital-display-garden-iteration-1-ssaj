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

export class PlantComponent{// implements OnInit {
    public plant: Plant = {
        id: "12345",
        name: "Daisy",
        cultivar: "Experimental",
        source: "PA",
        bedNumber: "1",
        comments: "This is a nice flower!"
    };



    // !!! Save for future use !!!
    // constructor(private plantService: PlantService) {
    //     // this.plants = this.plantListService.getPlants();
    // }
    //
    // fileChange(event) {
    //     console.log("Hello!");
    //
    //     this.plantService.uploadFile(event);
    //
    //     this.plantService.getPlants();
    //
    // }
    //
    // ngOnInit(): void {
    //     this.plantService.getPlants().subscribe(
    //         plants => this.plants = plants,
    //         err => {
    //             console.log(err);
    //         }
    //     );
    //
    //     console.log("Subscribed to plants");
    // }
}
