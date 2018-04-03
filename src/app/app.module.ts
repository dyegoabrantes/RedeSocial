import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostComponent } from './linha-do-tempo/post/post.component';
import { PostService } from './services/post.service';
import { PostManagerComponent } from './post-manager/post-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinhaDoTempoComponent,
    PostComponent,
  
    PostManagerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    routes,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
