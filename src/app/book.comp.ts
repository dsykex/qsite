import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {Params, ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './book.html'
})

export class BookDetail extends Global{
    book: any = {};

    constructor(public http: Http, private route: ActivatedRoute,private router: Router){
        super(http);
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getObject('products', 'id', id).subscribe(data => {
                if(data){
                    this.book = data;
                }
            })
        });
    }

    deleteBook(){
        this.insertData('DELETE FROM products WHERE id='+this.book.id).subscribe(data=>{
            console.log(data);
            this.router.navigate(['/books']);
        })
    }
}