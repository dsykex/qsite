import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';
import {RouterModule} from '@angular/router';

@Component({
    templateUrl: './music.html'
})

export class MusicComp extends Global{
    tapes: any;
    singles: any;
    obj: any = {};
    
    constructor(public http: Http){
        super(http);
        this.getAllData('users').subscribe(data => {
            if(data){
                this.tapes = data;
                console.log(this.tapes);
            }
        });
    }

    createAlbum(){

    }

    createSingle(){

    }
}