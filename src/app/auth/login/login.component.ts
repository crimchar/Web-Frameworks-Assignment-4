import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSvc: UserService, private authSvc: AuthGuardService) { }
  userId = '';
  password = '';
  errorMsg = '';
  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  Login()
  {
    this.userSvc.Login(this.userId, this.password).subscribe((returnedToken) => {
      console.log(returnedToken);
      this.authSvc.SetUserLoggedIn(returnedToken);
      this.errorMsg = '';
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    });
  }

}
