import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatPaginatorModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { HomeRouting } from './home.route'
import { PostsComponent } from './components/posts.component';
import { AuthorsComponent } from './components/authors.component';
import { AuthorService } from 'src/services/author.service';
import { HomeComponent } from './components/home.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
    imports: [ 
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatPaginatorModule,
        CommonModule,
        HomeRouting,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        UtilsModule
    ],
    providers: [ AuthorService ],
    declarations: [ 
        PostsComponent,
        AuthorsComponent,
        HomeComponent
    ]
})
export class HomeModule { }