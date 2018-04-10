import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { Router } from '@angular/router';
import { Post } from './../models/post.model'
 
@Component({
  selector: 'app-post-manager',
  templateUrl: './post-manager.component.html',
  styleUrls: ['./post-manager.component.css']
})
export class PostManagerComponent implements OnInit {

  constructor( private postService: PostService,
                private router: Router) { }

  nome: String;
  texto: String;

  adicionarPost(){
    this.postService.adicionarPost(this.nome, this.texto)
    .subscribe(data => { console.log(data);
      this.router.navigate(['']);
    },
    error => console.log(error));
  }

  ngOnInit() {
    
  }

}
