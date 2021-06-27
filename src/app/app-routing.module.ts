import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'post-detail/:id', component: PostDetailComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
