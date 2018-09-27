import { Component } from '@angular/core';
import { RegisterUser } from './register-user';
import { UsersService } from './user.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent{
    user: RegisterUser = new RegisterUser();

    constructor(private userService:UsersService){

    }
    register(){
        this.userService
        .register(this.user)
        .subscribe(res => console.log(res))
    }
}