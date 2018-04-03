import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  private posts: Post[] = [
    new Post(1,'Gabriella','Desejo muita sorte!',0),
    new Post(2,'Paullo','Vacas destroem as florestas',0)
  ];

  adicionarPost(nome, texto){
    let id = this.posts.length + 1;
    let post = new Post(id, nome, texto, 0);
    this.posts.push(post);
  }

  obterTodosPosts(){
    return this.posts;
  }

  excluirPost(id){
    let index = this.posts.findIndex(x => x.id == id);
    this.posts.splice(index, 1);
  }

  receberLike(post){
    post.qtdLikes++;
    console.log(post)
  }
  
  constructor() { }

}
