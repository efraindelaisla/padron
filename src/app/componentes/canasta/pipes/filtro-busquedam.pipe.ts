import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusquedam'
})
export class FiltroBusquedamPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.SEGUNDO_APELLIDO.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || post.FOLIO_RELACIONADO.toString().indexOf(arg.toString()) > -1) {
          resultPosts.push(post);
    };
    };
    return resultPosts;
    }


    }

