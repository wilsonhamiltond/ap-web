export interface IPost{
    id: string;
    title: string;
    body: string;
    date: Date;
    time: Date;
}

export class PostModel implements IPost{
    id: string;
    title: string;
    body: string;
    date: Date;
    time: Date;

    constructor(){
        
    }
}
