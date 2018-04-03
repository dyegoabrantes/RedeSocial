import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../../models/post.model';
import { PostService } from './../../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private postService: PostService) { }
  @Input() post: Post;
  @Output() recebeuLike = new EventEmitter<Post>();

  curtiu(post){
    this.recebeuLike.emit(post);
  }

  excluirPost(id){
    this.postService.excluirPost(id);
  }

  ngOnInit() {
  }

}
