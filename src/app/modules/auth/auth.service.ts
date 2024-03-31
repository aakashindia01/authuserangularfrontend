import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private _isLoggedIn = false;

    IS_LOGGEDIN_URI = 'http://localhost:3000/api/auth/isloggedin';
    constructor(private http: HttpClient) { }


    getIsLoggedIn(): Observable<boolean> {
        return this.http.get(this.IS_LOGGEDIN_URI).pipe(
            map((res: any) => {
                this._isLoggedIn = res.isloggedin;
                return this._isLoggedIn;
            })
        );
    }

}