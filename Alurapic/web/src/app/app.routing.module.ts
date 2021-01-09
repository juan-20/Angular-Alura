import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { NotFoundComponent } from "./errors/not-found/not-found.component";

import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";

const routes: Routes = [
    { path: 'user/flavio', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent },
];


@NgModule({
    imports: [
        // ele recebe as rotas do array ai o routermodule já sabe as rotas 
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}