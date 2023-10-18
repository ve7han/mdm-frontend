import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(protected tokenStorageService: TokenStorageService, protected router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const data = route.data as { allowedRoles: string[] }; 
    
    // Check if the user is logged in and has an allowed role
    if (this.tokenStorageService.getToken() && data.allowedRoles.includes(this.tokenStorageService.getRoles() || '')) {
      return true; // User is logged in and has an allowed role
    } else {
      this.router.navigate(['/login']); // User is not logged in or has no allowed role, redirect to login page
      return false;
    }
  }
}
