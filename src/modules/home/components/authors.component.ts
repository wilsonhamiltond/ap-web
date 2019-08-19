import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { IAuthor } from '../../../models/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: [ './authors.component.scss' ]
})
export class AuthorsComponent implements OnInit {
  authors: Array<IAuthor> = [];
  
  @Output('author_change')
  author_change = new EventEmitter();

  selected: IAuthor;
  sort:string = 'asc';
  constructor(
    public authorService: AuthorService,
  ) { }

  ngOnInit() {
    this.paginate();
  }

  paginate() {
    this.authorService.list().subscribe((response: any) => {
      if(response.result)
        this.authors = response.data;
        if(this.authors.length > 0){
          this.selected = this.authors[0];
          this.author_change.next(this.selected);
        }
    });
  }

  change(author:IAuthor){
    this.selected = author;
    this.author_change.next(author);
  }
}