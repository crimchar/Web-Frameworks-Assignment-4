import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiToken } from '../models/token.model';
import { Token } from '../models/token.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

@Output() UserStateChanged = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const authToken = localStorage.getItem('AuthToken');
    if (authToken !== null)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // tslint:disable-next-line: typedef
  SetUserLoggedIn(tokenAuth: ApiToken)
  {
    localStorage.setItem('AuthToken', JSON.stringify(tokenAuth));
    this.UserStateChanged.emit(true);
    this.router.navigate(['/home']);
  }

  // tslint:disable-next-line: typedef
  LogoutUser()
  {
    localStorage.removeItem('AuthToken');
    // localStorage.removeItem('userId');
    this.UserStateChanged.emit(false);
    this.router.navigate(['/home']);
  }
}


