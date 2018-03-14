import { Injectable } from '@angular/core';

@Injectable()
export class FakeLoginService {
    validateLogin(loginDetails): boolean {
        if(loginDetails.username === 'admin' && loginDetails.password === 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
}