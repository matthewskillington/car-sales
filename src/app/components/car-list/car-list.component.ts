import { Component, OnInit } from '@angular/core';
import { Car } from './../car/car.component';
import { CarList } from '../../data/car-list';

@Component({
    selector: 'car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})

export class CarListComponent {
public cars = CarList;
selectedCar: Car;

onSelect(car: Car): void {
    this.selectedCar = car;
}

ngOnInit() {
    
}

}
