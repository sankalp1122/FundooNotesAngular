import { CanActivateFn , ActivatedRouteSnapshot , RouterStateSnapshot , UrlTree, CanActivate, Router } from '@angular/router';
import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';
import { AuthguardServiceService } from './services/authguard-service.service';


@Injectable({

  providedIn: 'root'

})

export class AuthenticationGuard implements CanActivate {
  
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}
  canActivate():boolean{
    if (!this.Authguardservice.geTtoken()) {
      console.log("Using AuthGuard");
      
      this.router.navigateByUrl('/login');
      return false
    }
    return true
  }
};
