import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postSvc: PostService, private router: Router, private route: ActivatedRoute) { }
  errorMsg: string;
  currentPost: Post;
  currentPostId: number;

  ngOnInit(): void {
    this.errorMsg = '';
    this.currentPost = new Post();
    this.currentPostId = +this.route.snapshot.paramMap.get('postId');

    if (this.currentPostId)
    {
      this.postSvc.GetPost(this.currentPostId).subscribe((postResult) => {
        this.currentPost = postResult;
        console.log(this.currentPost);
      }, error => {
        this.errorMsg = error.error.message;
      });
    }
  }

  // tslint:disable-next-line: typedef
  SavePost()
  {
    this.postSvc.UpdatePost(this.currentPost).subscribe((success) => {
      this.errorMsg = '';
      this.router.navigate(['/home']);
    }, error => {
      this.errorMsg = error.error.messsage;
    });
  }

}
