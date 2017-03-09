import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Plants } from '../temp/Plants';
import { Observable } from "rxjs";
import {User} from "../temp/user";


@Injectable()
export class LoginService {
    private regUrl: string = API_URL + "registration";
    constructor(private http:Http) {}

    check(password: string): any{
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this.http
            .post("http://localhost:4567/registration-check", JSON.stringify({password}), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(error => Observable.throw(error));
    }
}