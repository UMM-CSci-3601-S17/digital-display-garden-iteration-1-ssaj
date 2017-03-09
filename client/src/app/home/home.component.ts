import { Component } from '@angular/core';

@Component({
    templateUrl: 'home.component.html'
})

// Component class
export class HomeComponent {
    public greeting: string;

    constructor() {
        this.greeting = "Welcome to the Digital Display Garden!";
    }
}