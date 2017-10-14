import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
    moduleId: module.id,
    selector: 'app-posts',
    templateUrl: 'posts.component.html',
    styleUrls: ['posts.component.css'],
    providers: [ PostService ]
})
export class PostsComponent implements OnInit {
    pageTitle: any = 'All posts';
    posts: Post[];
    errorMessage: string;
    mode = 'Observable';

   constructor( private postService: PostService, private router: Router ) {}

   ngOnInit() {
   const timer = Observable.timer(0, 5000);
   timer.subscribe(() => this.getPosts());
   }

   getPosts() {
        this.postService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                    error => this.errorMessage = <any>error
                );
	}

    goToShow(post: Post): void {
		console.log('here we go', this.posts);
        const postLink = ['/post', post.id];
        this.router.navigate(postLink);
	}
}
