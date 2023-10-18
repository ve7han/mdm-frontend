import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuardService extends AuthGuardService {
  override canActivate(): boolean {
    if (super.canActivate() && this.tokenStorageService.hasRole('SUPERADMIN')) {
      return true; // User is logged in and has SUPERADMIN role
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  } 
}
