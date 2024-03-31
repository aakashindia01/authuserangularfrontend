import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
class PermissionsService {
  constructor(private authService: AuthService,  private router: Router){}
  canActivate(): Observable<boolean> {
    return this.authService.getIsLoggedIn().pipe(
      map(isLoggedIn => {
        console.log('isLoggedIn', isLoggedIn)
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
        return isLoggedIn;
      })
    );
  }
}

export const authGaurd: CanActivateFn = () =>{
    const permissionsService = inject(PermissionsService);
    return permissionsService.canActivate()
}