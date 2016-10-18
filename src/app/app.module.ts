import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { AUTH_PROVIDERS }      from 'angular2-jwt';


import { AppComponent } from './app.component';
import {ContactComp} from './contact';
import {HomeComp} from './home.comp';
import {MusicComp} from './music.comp';
import {BooksComp} from './books.comp';
import {BookDetail} from './book.comp';
const appRoutes: Routes = [
    { path: 'contact', component: ContactComp },
    { path: 'books', component: BooksComp },
    { path: 'book/:id', component: BookDetail },
    { path: 'home', component: HomeComp },
    { path: '', component: HomeComp },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComp,
    MusicComp,
    BooksComp,
    BookDetail,
    ContactComp
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
