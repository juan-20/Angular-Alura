import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

// declara o pipe:
@Pipe({name: 'filterByDescription'})

export class filterByDescription implements PipeTransform{
    // 
    transform(photos: Photo[], descriptionQuerry: string) {
        descriptionQuerry = descriptionQuerry
        .trim()
        .toLowerCase()

        if (descriptionQuerry) {
            return photos.filter(photo =>
                // pega a foto pega  descriçãi joga pra lower case e inclui na querry da descrição
                 photo.description.toLocaleLowerCase().includes(descriptionQuerry)
                 )
        } else{
            return photos;
        }
    }

}