import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
    })
  }
  deletePost(data) {
    this.postsService.deletePost(data._id).subscribe(res => {
      this.posts.splice(this.posts.findIndex(itemPost => itemPost._id == res), 1);
    });
  }
}
