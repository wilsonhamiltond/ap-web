import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../models/post.model';
import { IAuthor } from 'src/models/author.model';
import { AuthorService } from 'src/services/author.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-list',
  templateUrl: './list.component.html'
})
export class PostListComponent implements OnInit {
  author: IAuthor;
  posts: IPost[] = [];
  public query: string = '';
  public size: number = 0;
  sort: string = 'asc';
  public params: any = {
    skip: 0,
    limit: 10
  };

  constructor(
    public authorService: AuthorService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:any) =>{
      if(params.author){
        this.authorService.get(params.author).subscribe((response: any) => {
          this.author = response.data;
          this.size = this.author.posts.length;
          this.paginate();
        });
      }
    })
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


  delete(index: number) {
    let result = confirm('Do you want to delete this post?')
    if (result) {
      this.author.posts.splice( index, 1);
      this.authorService.update(this.author.id, this.author).subscribe((response:any) => {
        if (response.result == true) {
          alert('Post delete success.');
        } else {
          alert('Error deleting post.');
        }
      })
    }
  }
}