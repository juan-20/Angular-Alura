import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000'

// faz com que ele possa aparecer em todos os lugares
@Injectable({providedIn: 'root' })

export class PhotoService{
    
    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {

        return this.http
        //tipado com objeto em array 
        .get<Photo[]>(API + '/' + userName +'/photos') 
    }
    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
        .append('page', page.toString())
        return this.http
        //tipado com objeto em array 
        .get<Photo[]>(API + '/' + userName +'/photos', { params }) 
    }
}