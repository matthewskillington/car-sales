import { Component, Input } from '@angular/core';
import { Car } from '../car/car.component';
import { CommService } from '../../communication.service';
@Component({
    selector: 'car-detail',
    templateUrl: './car-detail.component.html',
    styleUrls: ['./car-detail.component.less']
})

export class CarDetailComponent {
private _selectedCar: Car;

private open: boolean = true;

@Input() set selectedCar(value: Car) {

    this._selectedCar = value;
    this.reOpen();
}

get selectedCar(): Car {
    return this._selectedCar;
}

constructor(private commService: CommService){

}

reOpen (): void {
    this.open = true;
}

save(): void {
    this.commService.updateCar(this.selectedCar)
        //.subscribe(() => this.goBack();
}

toggleVisible(): void {
    if (this.open) {
        this.open = false;
    }
    else {
        this.open = true;
    }
}

}