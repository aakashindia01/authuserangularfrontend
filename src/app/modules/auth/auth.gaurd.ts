import { Injectable, inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
class UserToken {}

@Injectable({
    providedIn: 'root'
})
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

export const authGaurd: CanActivateFn = () =>{
    const permissionsService = inject(PermissionsService);
    const userToken = inject(UserToken);
    return permissionsService.canActivate(userToken, '1')
}