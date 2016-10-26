import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends Global{
    obj: any = {};
    constructor(public http: Http){
        super(http);
        this.getAllData('events').subscribe(data => {
            console.log(data);
        })
    }

    submitForm(){
        console.log(this.obj);
    }
}
