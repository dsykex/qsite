import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {NgClass, NgStyle} from '@angular/common';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';

@Component({
    templateUrl: './createBook.html',
})

export class CreateBook extends Global{
    book: any = {};
    uploadFile: any;
    options: Object = {
        url: 'http://dsykes.net16.net/upload.php'
    };
    
    constructor(public http: Http, public router: Router){
        super(http);
    }

    handleUpload(data): void {
        if (data && data.response) {
            data = data.response;
            this.uploadFile = data;
            this.book['picture'] = 'http://dsykes.net16.net/uploads/'+data;
        }
    }

    addBook(){
        if(this.book){
            this.insertData('INSERT INTO products (title, picture, description, price, author, createdAt) VALUES ("'+this.book.title+'", "'+this.book.picture+'", "'+this.book.description+'", '+this.book.price+', "'+this.book.author+'", NOW())')
                .subscribe(data => {
                    console.log(data);
                    setTimeout( ()=> {
                        this.router.navigate(['/books']);
                    },1000);
                })
        }
    }
}