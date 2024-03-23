import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    constructor(){

    }

    setCookies(){
        document.cookie = 'token=dummy';
    }

    setSession(key: string, value: string){
        sessionStorage.setItem(key, value);
    }

    getCookies(key: string){
        return document.cookie
    }

    getSesssion(key: string){
        return sessionStorage.getItem(key);
    }

    clearSession(){
        sessionStorage.clear();
    }
    clearCookies(){
        document.cookie = '';
    }
    clearLocalStorage(){
        localStorage.clear();
    }
}