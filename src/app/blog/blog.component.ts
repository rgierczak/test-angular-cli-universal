import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
    posts = [];

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService
            .getBlogPosts()
            .subscribe(
                (posts) => this.onSuccess(posts),
                (error) => this.onError(error)
            );
    }

    onSuccess(success) {
        this.posts = success;
    }

    onError(error) {
        console.log(error);
        Observable.throw(error);
    }
}
