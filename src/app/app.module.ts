import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';
import { TitleFormatPipe } from './Pipes/title-format.pipe';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent,
    TitleFormatPipe,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
