import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FakeLoginService } from './../../services/fake-login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls:  ['./login.component.less']
})

export class LoginComponent implements OnInit {
    public error: boolean;
    public loggedIn: boolean;
    private username: string;

    constructor(private loginservice: FakeLoginService) {

    }

    @ViewChild('loginForm') loginEl: ElementRef;


    ngOnInit() {
        this.checkLogin();
    }

    //returns true if cookie does exist, false if not
    checkLogin(): void {
        this.username = this.getCookie('username');
        if (this.username === null) {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
        }
    }

    getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    } 

    attemptLogin(): void {
        let loginDetails = {
            username: undefined,
            password: undefined
        }
        loginDetails.username = this.loginEl.nativeElement.querySelector('.login-username').value;
        loginDetails.password = this.loginEl.nativeElement.querySelector('.login-password').value;

        if(this.loginservice.validateLogin(loginDetails)){
            document.cookie = "username=admin;";
            this.checkLogin();

        }
        else {
            this.error = true;
        }
    }

    logOut(): void {
        this.error = false;
        this.loggedIn = false;
        this.username = '';
        this.deleteCookie('username');
    }

    deleteCookie(name): void {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

}