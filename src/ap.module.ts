import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APRouting } from './ap.route';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { APComponent } from './ap.component';
import 'hammerjs/hammer.js'

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule} from '@angular/material/core';
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