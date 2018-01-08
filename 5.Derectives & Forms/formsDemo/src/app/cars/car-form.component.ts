import {Component } from '@angular/core';
import { Car } from './car';

@Component({
    selector: 'car-form',
    templateUrl: './car-form.component.html'
})
export class CarFormComponent{
    engines = [1.2, 1.6, 1.9, 4.0];
    car: Car;
    constructor() {
        this.clearCar();
    }

    submitCar(){
        console.log(this.car);
    }
    clearCar() {
        this.car = new Car('', '', 0)
    }
}