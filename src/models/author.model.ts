import { IPost } from './post.model';

export interface IAuthor{
    id: string;
    name: string;
    email: string;
    date_birth: Date;

    posts: IPost[];
}

export class AuthorModel implements IAuthor{
    id: string;
    name: string;
    email: string;
    date_birth: Date;

    posts: IPost[];

    constructor(){
        this.posts = [];
    }
}
