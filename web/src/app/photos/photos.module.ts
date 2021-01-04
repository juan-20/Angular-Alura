import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

// faz um componente grande com modulos dentro
@NgModule({
    declarations: [PhotoComponent],
    exports: [ PhotoComponent ],
    imports: [HttpClientModule]
})
export class PhotosModule{}