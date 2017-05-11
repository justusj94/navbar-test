import { Component } from '@angular/core';
import {User} from '../user';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    localUser: User;

    onSubmit() {
        //console.log(this.localUser);
    }
}