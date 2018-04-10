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

  public posts: Post[];

  capturarLike(post){
    this.getPosts();
  }

  getPosts(){
    this.postService.obterTodosPosts()
      .subscribe((data) => {
        this.posts = data;
        console.log(this.posts);
      },
        (error) => console.log(error));
  }
  
  excluirPost(){
    this.getPosts();
  }
  alteracaoSalva(){
    this.getPosts();
  }
  cancelar(){
    this.getPosts();
  }
  ngOnInit() {
    this.getPosts();
    console.log('bla')
  }

}
