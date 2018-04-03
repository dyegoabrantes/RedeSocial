import { Routes, RouterModule } from '@angular/router';
import { LinhaDoTempoComponent } from 'app/linha-do-tempo/linha-do-tempo.component';
import { PostManagerComponent } from 'app/post-manager/post-manager.component';

const app_routes:Routes = [
  { path: '**', component: LinhaDoTempoComponent },
  { path: 'postar', component: PostManagerComponent}
]

export const routes = RouterModule.forRoot(app_routes);