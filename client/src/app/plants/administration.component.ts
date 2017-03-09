import { Component, OnInit } from '@angular/core';
import {PlantListService} from "./plant-list.service";

@Component({
    selector: 'administration-component',
    templateUrl: 'administration.component.html'
})
export class AdministrationComponent{


   username: string;
   password: string;
   showConfirmation: boolean;

   constructor(private plantListService: PlantListService) {}

   setUserPass(user, pass) : void{
       if(user != null && pass != null) {
           this.username = user;
           this.password = pass;
       }
   }

    fileChange(event) {
        this.plantListService.uploadFile(event);
        this.showConfirmation = true;
    }

}