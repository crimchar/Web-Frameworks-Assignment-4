import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiToken } from '../models/token.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'https://unf.josecgomez.dev';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  CreateNewUser(newUser: User)
  {
    return this.http.post<User>(`${this.BASE_URL}/Users`, newUser);
  }

  // tslint:disable-next-line: typedef
  Login(userName: string, password: string)
  {
    return this.http.get<ApiToken>(`${this.BASE_URL}/Users/${userName}/${password}`);
  }
}
