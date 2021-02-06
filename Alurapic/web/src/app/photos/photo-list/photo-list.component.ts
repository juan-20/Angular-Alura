import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { PhotoService } from '../photo/photo.service';
import { debounceTime } from 'rxjs/operators'

import { Photo } from '../photo/photo';
@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [  ];
  filter: string = '';
  debounce: Subject<string> =new Subject<string>();


  constructor (
              // private photoservice: PhotoService,
              private activetedRoute: ActivatedRoute){ }


  ngOnInit(): void {

    // const userName = this.activetedRoute.snapshot.params.userName;

  // console.log(http);
  // this.photoservice
  // .listFromUser(userName)
  // // se inscreave, consegue ler o json
  // .subscribe(photos => this.photos = photos);

   this.photos = this.activetedRoute.snapshot.data['photos'];

  //  o subcribe fica sempre ouvindo e não só quando ta ouvindo e o pipe faz um intervalo
   this.debounce
   .pipe(debounceTime(300))
   .subscribe(filter =>
    this.filter =filter)
  }

  ngOnDestroy(): void{
    this.debounce.unsubscribe();
  }

}
