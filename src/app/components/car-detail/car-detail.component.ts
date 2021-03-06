import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car/car.component';
import { CommService } from '../../services/communication.service';

@Component({
    selector: 'car-detail',
    templateUrl: './car-detail.component.html',
    styleUrls: ['./car-detail.component.less']
})

export class CarDetailComponent {
private _selectedCar: any;

private open: boolean = true;

@Input() set selectedCar(value: any) {

    this._selectedCar = value;
    this.reOpen();
}

@Output() deletedCar = new EventEmitter();

get selectedCar(): any {
    return this._selectedCar;
}

constructor(private commService: CommService){

}

reOpen (): void {
    this.open = true;
}

save(): void {
    this.commService.updateCar(this.selectedCar).subscribe();
}

delete(): void {
    this.commService.deleteCar(this.selectedCar).subscribe(() => this.deletedCar.emit(this.selectedCar));
    this.open = false;
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