import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private isLoggedIn = false;

    constructor(){}

    login(): void {
        this.isLoggedIn = true;
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isLoggedInfn(): boolean {
        return this.isLoggedIn;
    }

}