import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Plants } from '../temp/Plants';
import { Observable } from "rxjs";

@Injectable()
export class RegistrationService {
    private regUrl: string = API_URL + "registration";
    constructor(private http:Http) { }

    uploadUserandPass(event): void{
        let password: string = event.target.value;
        console.log(password);
        if (password != null){
            let headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            this.http.post("http://localhost:4567/import-csv", password, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }

    create(password: string): void{
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.http
            .post("http://localhost:4567/registration", JSON.stringify({password: password}), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(error => Observable.throw(error));
        console.log(password);
    }

  /*  uploadFile(event): void{
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            this.http.post("http://localhost:4567/import-csv", formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }*/

    /*getPlants(): Observable<Plants[]>{
        console.log("Getting plants");
        return this.http.request("http://localhost:4567/import-csv").map(res => res.json());
    }*/

    // getUsers(): Observable<Plant[]> {
    //     console.log(this.plantUrl);
    //     return this.http.request(this.plantUrl).map(res => res.json());
    // }
    //
    // getUserById(id: string): Observable<User> {
    //     return this.http.request(this.plantUrl + "/" + id).map(res => res.json());
    // }


}