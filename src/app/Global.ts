import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

export class Global {
    db_host: string = 'flypapermagazine.com';
    db_name: string = 'flypaper_scdb';
    db_username: string = 'flypaper_scmgr';
    db_password: string = 'maxwel123';
    currUser: any;
    lock = new Auth0Lock('ubHsCFWxl5rKW4s5BvqczsigypeBnNrs', 'dsykes.auth0.com', {
        auth: {
            redirectUrl: 'http://localhost:4200/'
        }
    });

    constructor(public http: Http){
        this.currUser = JSON.parse(localStorage.getItem('profile'));
        if(this.currUser){
            console.log(this.currUser);
            this.getObject('users', 'email', this.currUser.email).subscribe(data => {
                
                if(!data.email){
                    console.log('No User Exists with Email: '+this.currUser.email);
                    console.log('Creating New User..');

                    this.insertData('INSERT INTO `users` (createdAt, email, picture, rank) VALUES(NOW(), "'+this.currUser.email+'", "'+this.currUser.picture+'", "m");').subscribe(data => {
                        this.getObject('users', 'email', this.currUser.email).subscribe(userData => {
                            this.currUser = userData;
                            console.log(this.currUser);
                        })
                    });
                }else{
                    let pic = this.currUser.picture;
                    this.currUser = data;
                    console.log(this.currUser);
                }
            });
        }

        // If The User Just Authenticated 
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.currUser = authResult;

            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    alert(error);
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.currUser = profile;
                
                this.getObject('users', 'email', this.currUser.email).subscribe(data => {
                    if(!data.email){
                        console.log('No User Exists with Email: '+this.currUser.email);
                        console.log('Creating New User..');
                        this.insertData('INSERT INTO `users` (createdAt, email, picture, rank) VALUES(NOW(), "'+this.currUser.email+'", "'+this.currUser.picture+'", "m");').subscribe(data => {
                            this.getObject('users', 'email', this.currUser.email).subscribe(userData => {
                                this.currUser = userData;
                                console.log(this.currUser);
                            })
                        });
                    }else{
                        let pic = this.currUser.picture;
                        this.currUser = data;
                        console.log(this.currUser);
                    }
                });
            });
        });
    }

    public login() {
        this.lock.show();
    };

    public loggedIn() {
        return tokenNotExpired();
    };

    public logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.currUser = null;
    };

    getAllData(db){
        let conData = {
            db_host: this.db_host,
            db_name: this.db_name,
            db_username: this.db_username,
            db_password: this.db_password,
            query: 'get all '+db,
            all: true
        };
        return this.http.post('http://dsykes.net16.net/test.php', conData).map(res => res.json());
    }
    
    insertData(query){
        let conData = {
            db_host: this.db_host,
            db_name: this.db_name,
            db_username: this.db_username,
            db_password: this.db_password,
            query: query
        };
        return this.http.post('http://dsykes.net16.net/update.php', conData).map(res => res.json());
    }

    getObject(db, col, val){
        let conData = {
            db_host: this.db_host,
            db_name: this.db_name,
            db_username: this.db_username,
            db_password: this.db_password,
            query: 'get '+db+' '+col+' '+val+' spec',
            all: false
        };
        return this.http.post('http://dsykes.net16.net/test.php', conData).map(res => res.json());
    }

}
