import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../models/person.model";


@Injectable({
    providedIn: 'root'
})
export class PersonService{
    private url: string = 'assets/DATA.json';

    constructor(private http: HttpClient){

    }

    getPersonData(): Observable<Person[]>{
        return this.http.get<Person[]>(`${this.url}`);
    }

}