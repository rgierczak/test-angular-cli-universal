import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
    apiUrl = 'http://localhost:4200/assets/mocks';
    headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    getBlogPosts() {
        const url = this.apiUrl + '/blog.json';
        return this.http
            .get(url, {headers: this.headers})
            .map(res => res.json())
            .catch(err => Observable.throw(err));
    }
}
