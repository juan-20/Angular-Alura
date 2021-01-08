import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
