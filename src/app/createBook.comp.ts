import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {Params, ActivatedRoute} from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
    templateUrl: './createBook.html'
})

export class CreateBook extends Global{
    book: any;

    constructor(public http: Http){
        super(http);


    }

    addBook(){

    }
}