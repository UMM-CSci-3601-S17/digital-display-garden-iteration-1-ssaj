import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.component.service";
import { Registration } from "../temp/Registration";
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
    selector: 'login.component',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
    public login: boolean = true;

    constructor(private loginService: LoginService, private router: Router) {
        // this.plants = this.plantListService.getPlants();
    }


    add(password: string): void {
        password = password.trim();
        if (!password) { return; }
        if (this.login == this.loginService.check(password)){
            console.log('this works!');
            this.router.navigate(['/import]']);
        }
    }

    ngOnInit(): void {

        console.log("Subscribed to plants");
    }
}
