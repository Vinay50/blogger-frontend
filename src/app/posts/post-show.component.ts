import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
    moduleId: module.id,
    selector: 'app-post-show',
    templateUrl: 'post-show.component.html',
    styleUrls: ['posts.component.css'],
    providers: [ PostService ]
})

export class PostShowComponent implements OnInit {
    //  id: number;
    //  routeId: any;

     @Input() post: Post;

     constructor(
        private http: Http,
        private route: ActivatedRoute,
        private postService: PostService
     ) {}

    ngOnInit() {
        console.log('posts are', this.post);
        let postRequest = this.route.params
                .flatMap((params: Params) =>
                    this.postService.getPost(+params['id']));
        postRequest.subscribe(response => this.post = response.json());
    }
}

