import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './contact.html'
})

export class ContactComp extends Global{
    constructor(public http: Http){
        super(http);
        console.log('CONTACT HIT!');
    }
}