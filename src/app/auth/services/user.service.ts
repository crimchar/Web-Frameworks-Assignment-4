import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiToken } from '../models/token.model';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import jwt_decode from 'jwt-decode';


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

  // tslint:disable-next-line: typedef
  SetUserLoggedIn(currentToken: string)
  {
    const decodedToken = jwt_decode<Token>(currentToken);
    console.log(decodedToken);
    const userToken = new Token();
    userToken.UserData = decodedToken.UserData;
    userToken.iat = decodedToken.iat;
    userToken.exp = decodedToken.exp;
    userToken.sub = decodedToken.sub;
    const myToken = JSON.parse(currentToken);
    const trueToken = myToken.token;
    userToken.token = myToken.token;
    localStorage.setItem('Token', JSON.stringify(userToken));
  }

  // tslint:disable-next-line: typedef
  GetLoggedInUser()
  {
    const authToken = localStorage.getItem('Token');
    if (authToken !== null) {
      const currentToken = new Token();
      Object.assign(currentToken, JSON.parse(authToken));
      return currentToken;
    }
    else {
      return null;
    }
  }
}
