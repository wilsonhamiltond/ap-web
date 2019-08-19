import { Component } from '@angular/core';
import { IAuthor } from 'src/models/author.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
  author: IAuthor;

  constructor(
  ) { }

  author_change(author:IAuthor){
    delete this.author;
    setTimeout(() =>{
      this.author = author;
    }, 0)
  }
  
}