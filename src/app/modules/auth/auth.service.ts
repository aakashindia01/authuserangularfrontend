import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private _isLoggedIn = false;

    constructor() { }

    login(): void {
        this._isLoggedIn = true;
    }

    logout(): void {
        this._isLoggedIn = false;
    }

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

}