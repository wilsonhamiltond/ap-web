import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorModel, IAuthor } from '../../../models/author.model';
import { AuthorService } from '../../../services/author.service';

import { Observable } from 'rxjs';

@Component({
    selector: 'author-create',
    templateUrl: './create.component.html'
})
export class AuthorCreateComponent implements OnInit {

    public author: IAuthor;
    constructor(
        public activatedRoute: ActivatedRoute,
        public router: Router,
        public authorService: AuthorService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((paramns: any) => {
            let _id = paramns['_id'];
            if (_id != '0') {
                this.authorService.get(_id).subscribe((response: any) => {
                    if (response.result)
                        this.author = <IAuthor>response.data;
                    else {
                        alert(response.message);
                    }
                })
            } else {
                this.author = new AuthorModel();
            }
        })
    }

    save() {
        let request: Observable<any>,
            author: any = Object.assign({}, this.author);

        if (!author.id) {
            request = this.authorService.create(author);
        } else {
            request = this.authorService.update(author.id, author);
        }

        request.subscribe((response: any) => {
            if (response.result == true) {
                alert('Author save success.');
                this.router.navigate(['/author/list'])
            } else {
                alert(response.message);
            }
        })
    }
}