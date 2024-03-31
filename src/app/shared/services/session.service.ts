import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    constructor(){

    }

    setCookies(name: string, value: string, days: number) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${value || ''}${expires}; path=/`;
    }

    setSession(key: string, value: string){
        sessionStorage.setItem(key, value);
    }

    getCookies(key: string){
        console.log(document.cookie)
        return document.cookie
    }

    getSession(key: string){
        return sessionStorage.getItem(key);
    }

    clearSession(){
        sessionStorage.clear();
    }
    clearCookies(){
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const cookieParts = cookie.split('=');
            const cookieName = cookieParts[0].trim();
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    }
    clearLocalStorage(){
        localStorage.clear();
    }
}