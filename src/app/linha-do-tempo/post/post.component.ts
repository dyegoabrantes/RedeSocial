import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../../models/post.model';
import { PostService } from './../../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private postService: PostService, private router: Router,) { }
  @Input() post: Post;
  @Output() recebeuLike = new EventEmitter<Post>();
  @Output() postExcluido = new EventEmitter<String>();
  @Output() alteracaoSalva = new EventEmitter<String>();
  @Output() cancelarAlteracao = new EventEmitter<String>();

  curtiu(post){
    this.postService.receberLike(post)
      .subscribe(data => {
        this.recebeuLike.emit(post)},
        error => console.log(error));
  }

  editavel: Boolean = false;

  editarPost(post){
    this.editavel = true;
  }
  salvarAlteracoes(post){
    let textoNovo = document.querySelector('.editando').textContent;
    this.postService.editarPost(post, textoNovo)
      .subscribe(data => {
        this.alteracaoSalva.emit(post);
      },
      error => console.log(error));
  }
  cancelar(id){
    this.cancelarAlteracao.emit(id);
  }

  excluirPost(id){
    this.postService.excluirPost(id)
      .subscribe(data => {
        console.log(id, data)
      this.postExcluido.emit(id);
      },
        error => console.log(error));
  }

  ngOnInit() {
  }

}
