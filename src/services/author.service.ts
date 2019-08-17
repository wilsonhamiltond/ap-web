import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthor } from 'src/models/author.model';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class AuthorService {
    private headers:any;
    base_url:string = '';
    constructor(
        private httpClient: HttpClient
    ) { 
        this.headers = {
            'Content-Type':  'application/json'
        };
        this.base_url = `${environment.api_url}api/v1/author`
    }

    get(id:string){
        return this.httpClient.get(`${this.base_url}/${id}`, this.headers);
    }

    list(){
        return this.httpClient.get(`${this.base_url}`, this.headers);
    }

    create(author:IAuthor){
        return this.httpClient.post(`${this.base_url}`, author, this.headers);
    }

    update(id:string, author:IAuthor){
        return this.httpClient.put( `${this.base_url}/${id}`, author, this.headers);
    }

    delete(id:string){
        return this.httpClient.delete(`${this.base_url}/${id}`, this.headers);
    }
    filter(data: any){
        return this.httpClient.post(`${this.base_url}/filter`, data, this.headers);
    }
}