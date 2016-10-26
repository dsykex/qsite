import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

import { AppComponent } from './app.component';
import {ContactComp} from './contact';
import {HomeComp} from './home.comp';
import {MusicComp} from './music.comp';
import {BooksComp} from './books.comp';
import {BookDetail} from './book.comp';
import {CreateBook} from './createBook.comp';
import {NewOrder} from './newOrder.comp';
import {Orders} from './orders.comp';

import {MomentModule} from 'angular2-moment';

const appRoutes: Routes = [
    { path: 'contact', component: ContactComp },
    { path: 'books', component: BooksComp },
    { path: 'book/:id', component: BookDetail },
    { path: 'create-book', component: CreateBook },
    { path: 'new-order/:id', component: NewOrder },
    { path: 'orders', component: Orders },
    { path: 'home', component: HomeComp },
    { path: '', component: HomeComp },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    MomentModule
  ],
  declarations: [
    AppComponent,
    HomeComp,
    MusicComp,
    BooksComp,
    BookDetail,
    ContactComp,
    CreateBook,
    NewOrder,
    Orders,
    UPLOAD_DIRECTIVES
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
