import * as console from 'console';
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
    id: number;
    routeId: any;
    errorMessage: any;
    returnUrl: string;
    editBtnClicked: boolean = false;

     @Input() post: Post;

     constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService
     ) {}

    // ngOnInit() {
    //     let postRequest = this.route.params
    //             .flatMap((params: Params) =>
    //                 this.postService.getPost(+params['id']));
    //     postRequest.subscribe(response => this.post = response.json());
    // }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/posts';
        this.routeId = this.route.params.subscribe(
          params => {
            this.id = +params['id'];
          });
        let postRequest = this.route.params
            .flatMap((params: Params) => 
              this.postService.getPost(+params['id']));
        postRequest.subscribe(response => this.post = response.json());
      }

    update(post: Post) {
        this.editBtnClicked = true;
        this.postService.updatePost(post)
            .subscribe(
              data => { return true },
              error => {
                return Observable.throw(error);
              });
      }

    delete(post: Post) {
        this.postService.postDelete(this.post.id)
          .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => this.errorMessage = error
          );
      }

    onUpdateClicked() {
        this.router.navigate([this.returnUrl]);
        this.editBtnClicked = false;
        window.location.reload();
    }
}


