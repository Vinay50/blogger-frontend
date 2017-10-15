import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostShowComponent } from './posts/post-show.component';
import { PostNewComponent } from './posts/post-new.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostShowComponent,
    PostNewComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
