import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { Message } from '../models/message.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    public login(user: User): Observable<User> {
        const body  = JSON.stringify(user);
        const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'}) };
                // 'Authorization': 'my-auth-token'})
                //const headers = new HttpHeaders({ 'Content-Type': 'application/json' });                  
            //const options: RequestOptions = new RequestOptions({ headers: headers });
        
        return this.http
            .post(`http://localhost:8090/RaftPackSpring/login.app`, body, httpOptions)
            .catch(this.handleError);
            // .map((response: Response) => {
            //     return <User>response.json();
            // })
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
