import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Post } from './post';

@Injectable()
export class PostService {
    private postUrl = 'http://localhost:3000/posts';

    constructor(private http: Http) {}

    getPosts(): Observable<Post[]> {
        return this.http.get(this.postUrl)
                        .map((response: Response) => <Post[]>response.json())
                        .catch(this.handleError);
    }

    getPost(id: number) {
      return this.http.get(this.postUrl + "/" + id + '.json');
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
