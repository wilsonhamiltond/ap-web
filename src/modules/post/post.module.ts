import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatPaginatorModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { PostRouting } from './post.route'
import { PostListComponent } from './components/list.component';
import { PostCreateComponent } from './components/create.component';
import { AuthorService } from 'src/services/author.service';

@NgModule({
    imports: [ 
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatPaginatorModule,
        CommonModule,
        PostRouting,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [ AuthorService ],
    declarations: [ 
        PostListComponent,
        PostCreateComponent
    ]
})
export class PostModule { }