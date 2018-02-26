import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { CommService } from '../../communication.service';

function powerRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean } | null => {
        if(c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return {'range': true};
        }
        return null;
    };
}

function checkBoxValidation(): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean } | null => {
        var array = Object.values(c.value)
        var numberChecked = array.filter(item => item === true).length;
        if (numberChecked > 1) {
            return {'moreThanOne': true};
        }
        return null;

    };
}

@Component({
    selector: 'add-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less']
})


export class AddFormComponent implements OnInit {
    carForm: FormGroup;
    public payload: any;

    constructor(private fb: FormBuilder, private carService: CommService) {

    }

    ngOnInit(): void {
        this.carForm = this.fb.group({
            manufacturer: ['', Validators.required, ],
            model: ['', Validators.required],
            bhp: ['', [Validators.required, powerRange(10, 1000)]],
            /*typeGroup: this.fb.group({
                sports: false,
                hatchback: false,
                coupe: false,
                mpv: false
            },{validator: checkBoxValidation()}),*/
            price: ['', Validators.required],
            imageUrl: ['']
        });
    }

    save() {
        const car = {id: 1, manufacturer: 'Ford', model: 'Fiesta', bhp: 100, price: 2500, imageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/hwAAAOSw42JZBhOp/$_86.JPG' }
        this.carService.addCar(car);
    }
}