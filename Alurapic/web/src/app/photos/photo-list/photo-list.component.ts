import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  // paginação
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';


  constructor(
    // private photoservice: PhotoService,
    private activetedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }


  ngOnInit(): void {

    this.userName = this.activetedRoute.snapshot.params.userName;

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
        this.filter = filter)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        // concate faz concatenação da outra lista com essa
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      })
  }

}
