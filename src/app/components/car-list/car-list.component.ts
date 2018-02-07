import { Component, Input } from '@angular/core';

@Component({
    selector: 'car-list',
    template: `<div class="car-list">
    <car manufacturer="Ford" model="Fiesta" bhp="100" price="2500" imageUrl="https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/hwAAAOSw42JZBhOp/$_86.JPG"></car>
    <car manufacturer="Ford" model="Focus" bhp="225" price="4500" imageUrl="https://i.ytimg.com/vi/TXzwfE5Jkbg/maxresdefault.jpg"></car>
               </div>`
})

export class CarListComponent {
@Input() carsDisplayed: number;

}