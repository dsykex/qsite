import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {Params, ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './newOrder.html'
})

export class NewOrder extends Global{
    order: any = {}
    book: any;

    constructor(public http: Http, private route: ActivatedRoute,private router: Router){
        super(http);

        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number

            this.getObject('products', 'id', id).subscribe(data => {
                console.log(data);
                if(data){
                    this.book = data;
                }
            })
        });
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

    addOrder(){
        console.log(this.order);
        this.insertData('INSERT INTO llob_orders (username, location, info, book_id, createdAt) VALUES ("'+this.order.username+'", "'+this.order.location+'", "'+this.order.info+'", '+this.book.id+', NOW())')
            .subscribe(data => {
                console.log(data);
                setTimeout(()=> {
                    this.router.navigate(['/books'])
                })
            });
    }
}