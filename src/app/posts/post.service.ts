import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Post } from './post';

@Injectable()
export class PostService {
    headers: Headers;
    options: RequestOptions;
    private postUrl = 'http://localhost:3000/posts';

    constructor(private http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json'});
      this.options = new RequestOptions({ headers: this.headers });
    }

    getPosts(): Observable<Post[]> {
        return this.http.get(this.postUrl)
                        .map((response: Response) => <Post[]>response.json())
                        .catch(this.handleError);
    }

    getPost(id: number) {
      return this.http.get(this.postUrl + "/" + id + '.json');
    }

    createPost(post) {
      return this.http.post(this.postUrl, JSON.stringify(post), { headers: this.headers}).map((res: Response) => res.json());
    }

    postDelete(id: number): Observable<Post[]> {
      console.log('In delete function service', id);
      const url =  `${this.postUrl}/${id}`;
      return this.http.delete(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }

    updatePost(post: Post): Observable<Post> {
      console.log("i am in update");
      const url =  `${this.postUrl}/${post.id}`;
      return this.http.put(url, JSON.stringify(post),
        this.options).map((res: Response) => res.json())
            .catch(this.handleError);    
    }

    public extractData(res: Response){
      console.log('in xtractdata func');
      let body = res.json();
      return body || {};
    }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
