import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  constructor() { }

  nombre : string = 'salVador';
  fecha: Date = new Date();//now
}
