import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { APRouting } from './ap.route';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { APComponent } from './ap.component';
import 'hammerjs/hammer.js'

import { HttpClientModule } from '@angular/common/http';
import { AuthorModule } from './modules/author/author.module';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { HomeModule } from './modules/home/home.module';
import { PostModule } from './modules/post/post.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        APRouting,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        AuthorModule,
        HomeModule,
        PostModule
    ],   
    providers: [
    ],
    declarations: [
        APComponent
    ],
    bootstrap:    [ APComponent ],
    exports: []
})
export class APModule { }