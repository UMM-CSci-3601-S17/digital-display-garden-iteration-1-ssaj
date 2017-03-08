import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Plant } from './Plant';
import { Observable } from "rxjs";

@Injectable()
export class PlantService {
    private plantUrl: string = API_URL + "plants";
    constructor(private http:Http) { }

    uploadFile(event): void{
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
        }
    }

    getPlants(): Observable<Plant[]>{
        console.log("Getting plants");
        return this.http.request("http://localhost:4567/import-csv").map(res => res.json());
    }

}