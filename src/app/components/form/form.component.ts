import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
            manufacturer: '',
            model: '',
            power: '',
            price: '',
            image: ''
        });
    }

    save() {
        console.log(this.carForm);
        console.log('Saved:' + JSON.stringify(this.carForm.value))
    }
}