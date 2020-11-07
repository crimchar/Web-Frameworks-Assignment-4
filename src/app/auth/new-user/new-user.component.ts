import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userSvc: UserService, private router: Router) { }
  newUser: User;
  errorMsg = '';
  ngOnInit(): void {
    this.newUser = new User();
  }

  // tslint:disable-next-line: typedef
  CreateNewUser()
  {
    this.userSvc.CreateNewUser(this.newUser).subscribe((returnedUser) => {
      console.log(returnedUser);
      this.errorMsg = '';
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    });
  }

}
