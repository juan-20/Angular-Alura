import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { resolve } from "url";


import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Injectable ({providedIn: 'root'})

export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor (private service: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const userName = route.params.userName;

        return this.service.listFromUserPaginated(userName , 1 );
    }
}