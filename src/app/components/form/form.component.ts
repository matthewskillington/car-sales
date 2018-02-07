import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

function powerRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean } | null => {
        if(c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return {'range': true};
        }
        return null;
    };
}

@Component({
    selector: 'add-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})


export class AddFormComponent implements OnInit {
    carForm: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.carForm = this.fb.group({
            manufacturer: ['', Validators.required, ],
            model: ['', Validators.required],
            power: ['', [Validators.required, powerRange(10, 1000)]],
            price: ['', Validators.required],
            image: ['']
        });
    }

    save() {
        console.log(this.carForm);
        console.log('Saved:' + JSON.stringify(this.carForm.value));
    }
}