import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
     loggedIn: boolean
    constructor(private router: Router, private authService: AuthService) {}
  
    //fonction à 2 arg
    canActivate(
      next: ActivatedRouteSnapshot, //prends en compte la route de l'élement
      state: RouterStateSnapshot //l'êtat de l'élément
    ): boolean {
  
     this.loggedIn = true; // replace with actual user auth checking logic
  
      if (!this.authService.isAuth) {
        this.router.navigate(['/']);
      }
      
      return this.authService.isAuth;
    }
  }
  

