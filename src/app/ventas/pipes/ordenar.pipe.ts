import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = ''): Heroe[] {

    switch (orderBy) {
      case 'Nombre':
        return heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'Vuela':
        return heroes.sort((a,b) => (a.vuela > b.vuela) ? 1 : -1);
      case 'Color':
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
      case 'NombreDESC':
        return heroes.sort((a,b) => (a.nombre < b.nombre) ? 1 : -1);
      case 'VuelaDESC':
        return heroes.sort((a,b) => (a.vuela < b.vuela) ? 1 : -1);
      case 'ColorDESC':
        return heroes.sort((a,b) => (a.color < b.color) ? 1 : -1);   
      default:
        return heroes;
    }
    

  }

}
