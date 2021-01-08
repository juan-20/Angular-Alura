import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component'

// faz um componente grande com modulos dentro
@NgModule({
    declarations: [PhotoComponent,
                   PhotoListComponent,
                   PhotoFormComponent
                ],
    imports: [
        HttpClientModule,
        CommonModule,
    ]
})
export class PhotosModule{}