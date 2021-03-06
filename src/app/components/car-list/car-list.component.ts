import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from './../car/car.component';
import { CommService } from '../../services/communication.service';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
    selector: 'car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.less']
})

export class CarListComponent {
public cars;
selectedCar: any;

constructor(private commService: CommService){

}

@ViewChild(CarDetailComponent) detail: CarDetailComponent;

getCars(): void {
    this.commService.getCars().subscribe(cars => this.cars = cars);
}

onSelect(car: any): void {
    this.selectedCar = car;
    if(this.detail) {
        this.detail.reOpen();
    }
}

ngOnInit() {
    this.getCars();
}

}
