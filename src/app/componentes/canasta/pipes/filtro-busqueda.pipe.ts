import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusqueda'
})
export class FiltroBusquedaPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.PRIMER_APELLIDO.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || post.CURP.toLowerCase().indexOf(arg) > -1) {
          resultPosts.push(post);
    };
    };
    return resultPosts;
    }


    }

