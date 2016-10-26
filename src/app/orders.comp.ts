import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {Params, ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './orders.html'
})


export class Orders extends Global{
    orders: any;

    constructor(public http: Http){
        super(http);

        this.getAllData('llob_orders').subscribe(data => {
            console.log(data);
            this.orders = data;
        });
    }

    getBook(id){
        let book;
        /*this.getObject('products', 'id', id).subscribe(data => {
            book = data;
            //console.log(book);
        });*/
        console.log(book);
        return book;
    }
}