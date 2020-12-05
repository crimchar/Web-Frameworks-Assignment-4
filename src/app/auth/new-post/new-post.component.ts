import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postSvc: PostService, private router: Router) { }
  newPost: Post;
  errorMsg = '';

  ngOnInit(): void {
    this.newPost = new Post();
  }

  // tslint:disable-next-line: typedef
  CreateNewPost()
  {
    // this.newPost.userId = localStorage.getItem('userId');

    this.postSvc.CreateNewPost(this.newPost).subscribe((returnedPost) => {
      console.log(returnedPost);
      this.errorMsg = '';
      this.router.navigate(['/home']);
    }, (error) => {
      console.log(error);
      this.errorMsg = error.error.messsage;
    });
  }

}
