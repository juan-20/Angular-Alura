import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [  ];

  constructor (private photoservice: PhotoService,
              private activetedRoute: ActivatedRoute){ }


  ngOnInit(){

    const userName = this.activetedRoute.snapshot.params.userName;

  // console.log(http);
  this.photoservice
  .listFromUser(userName)
  // se inscreave, consegue ler o json
  .subscribe(photos => this.photos = photos);
  }

}
