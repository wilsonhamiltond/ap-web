import { Component, Input, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { IAuthor } from '../../../models/author.model';
import { IPost } from 'src/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  @Input('author')
  author: IAuthor;
  sort:string = 'asc';
  posts: IPost[] = [];
  public query: string = '';
  public size: number = 0;
  public params: any = {
    skip: 0,
    limit: 10
  };

  constructor(
    public authorService: AuthorService
  ) { 
  }

  ngOnInit(){
    this.paginate();
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

  paginate(){
    let posts = this.author.posts.filter( (post: IPost) =>{
      return post.title.toLowerCase().indexOf( this.query.toLowerCase()) >= 0;
    });
    this.size = posts.length;
    this.posts = posts.slice((this.params.skip * this.params.limit), this.params.limit);
  }
}