import { Component,  } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {


  mayusculasBool : boolean = true;
  ordernarPor:string = '';
  heroes : Heroe[] = [
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'A-Train',
      vuela: false,
      color: Color.azul
    }
    ,
    {
      nombre: 'Homelander',
      vuela: true,
      color: Color.azul
    }
    ,
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    }
    ,
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.negro
    }
  ];

  cambiarMayus(){
      this.mayusculasBool= this.mayusculasBool == true ? false : true;
  }

  cambiarOrden (valor:string) {
    this.ordernarPor = this.ordernarPor == valor ? valor+'DESC' : valor;
  }

}
