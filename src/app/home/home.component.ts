import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../auth/models/post.model';
import { Token } from '../auth/models/token.model';
import { PostService } from '../auth/services/post.service';
import { UserService } from '../auth/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userSvc: UserService, private postSvc: PostService, private router: Router) { }
  posts: Post[];
  errorMsg = '';
  currentUser: Token = null;

  ngOnInit(): void {
    this.posts = [];
    this.GetAllPosts();
    this.currentUser = this.userSvc.GetLoggedInUser();
  }

  // tslint:disable-next-line: typedef
  NoPosts() {
    return this.posts.length === 0;
  }

  // tslint:disable-next-line: typedef
  GetAllPosts()
  {

    this.postSvc.GetAllPosts().subscribe((returnedPosts) => {
      console.log(returnedPosts);
      this.errorMsg = '';
      this.posts = returnedPosts.slice().reverse();

    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    });
  }

  // tslint:disable-next-line: typedef
  EditPost()
  {

  }

  // tslint:disable-next-line: typedef
  DeletePost(post: Post)
  {
    if (confirm('Are you sure you want to delete?'))
    {
      this.postSvc.DeletePost(post).subscribe(() => {
        console.log('successful deletion');
        this.errorMsg = '';
        location.reload();
      }, (error) => {
        console.log(error);
        this.errorMsg = error.error.messsage;
      });
    }
  }

}
