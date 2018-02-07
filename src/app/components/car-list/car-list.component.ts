import { Component, Input, OnInit } from '@angular/core';
import { Car } from './../car/car.component';

@Component({
    selector: 'car-list',
    template: `<div class="car-list">
                    <div class="car-item" *ngFor="let car of cars">
                    <div class="car-header">
                        <h2>{{car.manufacturer}} {{car.model}}</h2><br/>
                    </div>
                    
                    <div class="image-place">
                        <img src="{{car.imageUrl}}" height="150px" width="250px">
                    </div>

                    <div class="car-details">
                        <p class="power"><b>Power:</b> {{car.bhp}} bhp</p><br/>
                        <p class="price">{{car.price}}GBP</p>
                    </div>
                </div>
               </div>
               `,
    styleUrls: ['./car-list.component.css']
})

export class CarListComponent {
@Input() carsDisplayed: number;
public cars = [];

public fiesta: Car = {
    manufacturer: 'Ford',
    model: 'Fiesta',
    bhp: 100,
    price: 2500,
    imageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/hwAAAOSw42JZBhOp/$_86.JPG'
}

public focus: Car = {
    manufacturer: 'Ford',
    model: 'Focus',
    bhp: 225,
    price: 4500,
    imageUrl: 'https://i.ytimg.com/vi/TXzwfE5Jkbg/maxresdefault.jpg'
}


ngOnInit() {
    this.cars.push(this.fiesta);
    this.cars.push(this.focus);
    console.log(this.cars);
    
}

}
