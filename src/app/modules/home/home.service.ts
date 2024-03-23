import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class HomeService {
    USER_DETAIL_URI = 'http://localhost:3000/api/auth/getDetails';
    LOGOUT_URI = 'http://localhost:3000/api/auth/logout';
    constructor(private http: HttpClient) { }

    getDetails() {
        return this.http.get(this.USER_DETAIL_URI);
    }

    logout(){
        return this.http.get(this.LOGOUT_URI);
    }
}
