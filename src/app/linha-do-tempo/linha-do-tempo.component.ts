import { Component, OnInit } from '@angular/core';
import { Post } from './../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[];

  capturarLike(post){
    this.postService.receberLike(post);
    console.log(post);
  }

  ngOnInit() {
    this.posts = this.postService.obterTodosPosts();
    console.log(this.posts)
  }

}
