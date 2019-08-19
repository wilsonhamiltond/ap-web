import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatPaginatorModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';

import { AuthorRouting } from './author.route'
import { AuthorListComponent } from './components/list.component';
import { AuthorCreateComponent } from './components/create.component';
import { AuthorService } from 'src/services/author.service';
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
        AuthorRouting,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        UtilsModule
    ],
    providers: [ AuthorService ],
    declarations: [ 
        AuthorListComponent,
        AuthorCreateComponent
    ]
})
export class AuthorModule { }