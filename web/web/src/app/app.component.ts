import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    photos: Object[] = [  ];

    constructor (private photoservice: PhotoService){ }


    ngOnInit(){
    // console.log(http);
      this.photoservice
    .listFromUser('flavio')
    // se inscreave, consegue ler o json
    .subscribe(photos => this.photos = photos);
    }


}
