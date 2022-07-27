import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Daniela';
  genero: string = 'f';

  bienvenidoMapa = {
    'm': 'bienvenido',
    'f': 'bienvenida'
  }

  clientes: string [] = ['Salvador', 'Daniela'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre () {
    if(this.nombre == 'Daniela') {
      this.nombre = 'Salvador';
      this.genero = 'm';
    } else {
      this.nombre = 'Daniela';
      this.genero = 'f';
    }

  }

  agregarCliente () {
    this.clientes.push('otro');
  }

  eliminarCliente () {
    this.clientes.shift();
  }
}
