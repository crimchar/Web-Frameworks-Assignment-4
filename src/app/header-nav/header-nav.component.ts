import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth/services/auth-guard.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private router: Router, private authGuardSvc: AuthGuardService) { }

  userLoggedIn = false;

  ngOnInit(): void {
    localStorage.clear();
    this.authGuardSvc.UserStateChanged.subscribe((userState) => {
      this.userLoggedIn = userState;
    });
  }

  // tslint:disable-next-line: typedef
  LogOutUser()
  {
    this.authGuardSvc.LogoutUser();
    this.router.navigate(['/login']);
  }

}
