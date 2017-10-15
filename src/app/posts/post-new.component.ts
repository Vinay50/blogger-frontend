import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
    moduleId: module.id,
    selector: 'app-post-new',
    templateUrl: 'post-new.component.html',
    styleUrls: ['posts.component.css'],
    providers: [ PostService ]
})

export class PostNewComponent {
     post = new Post;
     submitted: boolean = false;

     constructor( private postService: PostService ) {}

     createPost(post) {
      this.submitted = true;
      this.postService.createPost(post)
          .subscribe(
            data => { return true; },
            error => {
              console.log('Error saving proposal');
              return Observable.throw(error);
            }
      );
    }
}
