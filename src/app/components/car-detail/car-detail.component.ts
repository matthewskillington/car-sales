import { Component, Input } from '@angular/core';
import { Car } from '../car/car.component';
import { CommService } from '../../communication.service';
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

toggleVisible(): void {
    if (this.open) {
        this.open = false;
    }
    else {
        this.open = true;
    }
}

}