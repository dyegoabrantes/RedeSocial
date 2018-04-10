import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  
  constructor(private http: Http) { }

  private posts: Post[] = [];

  postsUrl = 'http://rest.learncode.academy/api/dyegoabrantes/RedeSocial';

  adicionarPost(nome, texto){
    let post = new Post(nome, texto, 0);
    this.posts.push(post);
    return this.http.post(this.postsUrl, post)
      .map((response:Response) => response.json())
      .catch((error:Response) => Observable.throw(error));
  }

  obterTodosPosts(){
    return this.http.get(this.postsUrl)
      .map((response:Response) => {
        this.posts = [];
        for (let post of response.json()) {
          this.posts.push(new Post(post.nomePessoa, post.texto, post.qtdLikes, post.id))
        }
        return this.posts;
      })
      .catch((error: Response) => Observable.throw(error));
  }

  excluirPost(id){
    return this.http.delete(this.postsUrl + "/" + id)
    .map((response: Response) => response)
    .catch((error: Response) => Observable.throw(error));
  }

  editarPost(post, textoNovo){
    return this.http.put(this.postsUrl + '/' + post.id, {nomePessoa:post.nomePessoa, qtdLikes:post.qtdLikes, texto:textoNovo})
    .map((response: Response) => response)
    .catch((error: Response) => Observable.throw(error));
  }

  receberLike(post){
    return  this.http.put(this.postsUrl + '/' + post.id, {qtdLikes:post.qtdLikes+1, nomePessoa:post.nomePessoa, texto:post.texto})
    .map((response: Response) => response)
    .catch((error: Response) => Observable.throw(error));
  }
}
