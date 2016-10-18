import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './home.html'
})

export class HomeComp extends Global{
    constructor(public http: Http){
        super(http);
        console.log('CONTACT HIT!');
    }
}