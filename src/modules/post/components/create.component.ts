import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostModel, IPost } from '../../../models/post.model';

import { Observable } from 'rxjs';
import { AuthorService } from 'src/services/author.service';
import { IAuthor } from 'src/models/author.model';

@Component({
    selector: 'post-create',
    templateUrl: './create.component.html'
})
export class PostCreateComponent implements OnInit {

    public post: IPost;
    author: IAuthor;
    index: number = 0;
    constructor(
        public activatedRoute: ActivatedRoute,
        public router: Router,
        public authorService: AuthorService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((paramns: any) => {
            let _id = paramns['_id'],
                author = paramns.author;
            this.index = Number(_id);
            this.authorService.get(author).subscribe((response: any) => {
                if (response.result) {
                    this.author = <IAuthor>response.data;
                    if (this.index > 0)
                        this.post = this.author.posts[this.index - 1];
                    else
                        this.post = new PostModel();
                } else {
                    alert(response.message);
                }
            })
        })
    }

    save() {
        let request: Observable<any>,
            post: any = Object.assign({}, this.post);

        if (this.index > 0) {
            this.author.posts[this.index - 1] = this.post;
        } else {
            this.author.posts.push(this.post);
        }

        this.authorService.update(this.author.id, this.author).subscribe((response: any) => {
            if (response.result == true) {
                alert('Post save success.');
                this.router.navigate(['/' + this.author.id + '/post/list'])
            } else {
                alert(response.message);
            }
        })
    }
}