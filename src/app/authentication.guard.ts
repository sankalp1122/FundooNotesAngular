import { CanActivateFn , ActivatedRouteSnapshot , RouterStateSnapshot , UrlTree, CanActivate } from '@angular/router';
import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';


@Injectable({

  providedIn: 'root'

})

export class AuthenticationGuard implements CanActivate {
  canActivate() :boolean {
    { 
      return true;
    }
  }
};
