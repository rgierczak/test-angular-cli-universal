import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Observable } from 'rxjs/Rx';
import { Post } from '../../interfaces/post';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
    posts: Post[] = [];

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
