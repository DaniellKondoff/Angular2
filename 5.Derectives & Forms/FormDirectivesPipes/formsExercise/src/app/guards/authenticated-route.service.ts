import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/service/auth-service.service";

@Injectable()
export class AuthenticatedRoute implements CanActivate {
    constructor(private router: Router, private authService : AuthService){

    }
    canActivate() {
        return this.check();
    }

    check(){
        if(this.authService.checkIfLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}