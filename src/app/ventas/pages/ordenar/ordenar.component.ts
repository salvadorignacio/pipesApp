import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mayusculasBool : boolean = true;

  cambiarMayus(){
      this.mayusculasBool= this.mayusculasBool == true ? false : true;
  }

}
