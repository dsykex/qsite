import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';

@Component({
    templateUrl: './books.html'
})

export class BooksComp extends Global{
    obj: any = {};
    books: any = false;
    constructor(public http: Http){
        super(http);
        this.getAllData('products').subscribe(data => {
            if(data){
                console.log(data);
                this.books = data;
            }
        });
    }

    executeAdmin(){
        console.log('GANG');
    }
}