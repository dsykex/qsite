import {Component} from '@angular/core';
import {Global} from './Global';
import {Http} from '@angular/http';

export class BooksComp extends Global{
    obj: any = {};
    executeAdmin(){
        console.log('yeepff');
    }
    constructor(public http: Http){
        super(http);
        
    }
}