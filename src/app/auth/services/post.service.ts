import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiToken } from '../models/token.model';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = 'https://unf.josecgomez.dev';
  constructor(private http: HttpClient, private userSvc: UserService) { }

  // tslint:disable-next-line: typedef
  CreateNewPost(newPost: Post)
  {
    const currentUser = this.userSvc.GetLoggedInUser();
    console.log(currentUser.token);
    return this.http.post<Post>(`${this.BASE_URL}/Posts`, newPost, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`)});
  }

  // tslint:disable-next-line: typedef
  GetAllPosts()
  {
    return this.http.get<Post[]>(`${this.BASE_URL}/Posts`);
  }

  // tslint:disable-next-line: typedef
  DeletePost(post: Post)
  {
    const currentUser = this.userSvc.GetLoggedInUser();
    return this.http.delete(`${this.BASE_URL}/Posts/${post.postId}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`)});
  }

  // tslint:disable-next-line: typedef
  GetPost(postId: number)
  {
    const currentUser = this.userSvc.GetLoggedInUser();
    return this.http.get<Post>(`${this.BASE_URL}/Posts/${postId}`, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`)});
  }

  // tslint:disable-next-line: typedef
  UpdatePost(post: Post)
  {
    const currentUser = this.userSvc.GetLoggedInUser();
    return this.http.patch<Post>(`${this.BASE_URL}/Posts/${post.postId}`, post, {headers: new HttpHeaders().set('Authorization', `Bearer ${currentUser.token}`)});
  }
}
