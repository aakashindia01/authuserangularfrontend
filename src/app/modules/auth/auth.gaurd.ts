import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
class PermissionsService {
  constructor(private authService: AuthService,  private router: Router){}
  canActivate(): boolean {
    console.log('isLoggedIn',this.authService.isLoggedIn)
    if(!this.authService.isLoggedIn){
      this.router.navigate(['/login']);
      return this.authService.isLoggedIn;
    }
    return this.authService.isLoggedIn;;
  }
}

export const authGaurd: CanActivateFn = () =>{
    const permissionsService = inject(PermissionsService);
    return permissionsService.canActivate()
}