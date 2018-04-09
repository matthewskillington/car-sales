import { Component, ViewChild, ElementRef } from '@angular/core';
import { FakeLoginService } from './../../services/fake-login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.less']
})

export class LoginComponent {
    public error: boolean;

    constructor(private loginservice: FakeLoginService) {

    }

    @ViewChild('loginForm') loginEl: ElementRef;

    attemptLogin(): void {
        let loginDetails = {
            username: undefined,
            password: undefined
        }
        loginDetails.username = this.loginEl.nativeElement.querySelector('.login-username').value;
        loginDetails.password = this.loginEl.nativeElement.querySelector('.login-password').value;

        if(this.loginservice.validateLogin(loginDetails)){

        }
        else {
            this.error = true;
        }
    }

}