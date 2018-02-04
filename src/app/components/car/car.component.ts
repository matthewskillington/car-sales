import { Component, Input } from '@angular/core';

@Component({
    selector: 'car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent {
@Input() manufacturer: string;
@Input() model: string;
@Input() bhp: number;
@Input() price: number;
@Input() imageUrl: string = '/assets/images/placeholder.png';

}