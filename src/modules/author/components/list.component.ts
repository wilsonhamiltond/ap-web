import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../../../models/author.model';
import { AuthorService } from 'src/services/author.service';

@Component({
  selector: 'author-list',
  templateUrl: './list.component.html'
})
export class AuthorListComponent implements OnInit {
  authors: Array<IAuthor> = [];
  public query: string = '';
  public size: number = 0;
  public params: any = {
    params: {},
    limit: 10,
    sort: { name: -1 },
    start_key: undefined,
    fields: {
      'name': true,
      'email': true,
      'posts': true,
      'date_birht': true
    }
  };

  constructor(
    public authorService: AuthorService,
  ) { }

  ngOnInit() {
    this.paginate();
  }

  paginate() {
    if (this.query) {
      this.params.params = {
        'name': this.query || ' '
      }
    } else
      this.params.params = {};

    this.authorService.filter(this.params).subscribe((response: any) => {
      this.authors = response.data.Items;
      this.size = response.data.Items.length;
    });
  }

  search(author?: any) {
    if (author && author.keyCode == 13) {
      this.params.skip = 0;
      this.query = author.target.value;
      this.paginate()
    } else if (!author) {
      this.paginate()
    }
  }

  onPage(author: any) {
    this.params.limit = author.pageSize;
    this.params.skip = (author.pageIndex * author.pageSize);
    this.paginate();
  }

  delete(author: IAuthor) {
    let result = confirm('Do you want to delete this author?')
    if (result) {
      this.authorService.delete(author.id).subscribe((response:any) => {
        if (response.result == true) {
          alert('Author delete success.');
          this.paginate()
        } else {
          alert('Error deleting author.');
        }
      })
    }
  }
}